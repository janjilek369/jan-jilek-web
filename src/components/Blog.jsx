import { useState, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { posthog } from '../lib/posthog'

const RSS_URL = '/api/substack-feed'
const RSS_FALLBACK_URL = 'https://jilekjan.substack.com/feed'
const SUBSTACK_URL = 'https://substack.com/@jilekjan'
const EXCERPT_LENGTH = 140

function stripHtml(html) {
  if (!html) return ''
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const text = doc.body.textContent || ''
  return text.replace(/\s+/g, ' ').trim()
}

function formatDate(rfc2822) {
  if (!rfc2822) return ''
  try {
    const d = new Date(rfc2822)
    return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return rfc2822
  }
}

function parseRssItems(xmlText) {
  try {
    const doc = new DOMParser().parseFromString(xmlText, 'text/xml')
    const items = doc.querySelectorAll('item')
    return Array.from(items).slice(0, 3).map((item) => {
      const titleEl = item.querySelector('title')
      const linkEl = item.querySelector('link')
      const pubDateEl = item.querySelector('pubDate')
      const descEl = item.querySelector('description')
      const title = titleEl?.textContent?.trim() ?? ''
      const link = linkEl?.textContent?.trim() ?? ''
      const pubDate = pubDateEl?.textContent?.trim() ?? ''
      let excerpt = ''
      if (descEl?.textContent) {
        excerpt = stripHtml(descEl.textContent)
        if (excerpt.length > EXCERPT_LENGTH) {
          excerpt = excerpt.slice(0, EXCERPT_LENGTH).trim() + '…'
        }
      }
      return { title, link, pubDate, excerpt }
    })
  } catch {
    return []
  }
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const Blog = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    const tryFetch = (url) =>
      fetch(url, { cache: 'no-store' })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          return res.text()
        })

    tryFetch(RSS_URL)
      .catch(() => tryFetch(RSS_FALLBACK_URL))
      .then((text) => {
        if (!cancelled && typeof text === 'string') setPosts(parseRssItems(text))
      })
      .catch(() => {
        if (!cancelled) setPosts([])
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  return (
    <section
      id="blog"
      ref={ref}
      className={`py-16 px-8 bg-gray-50 dark:bg-[#111114] ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          Blog
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark dark:text-white font-normal tracking-tight mb-6 leading-[1.15]">
          AI v praxi
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[600px] leading-[1.7] mb-10">
          Pravidelné články o tom, jak AI reálně pomáhá v každodenní práci. Praktické tipy, žádné buzzwordy.
        </p>

        {loading && (
          <p className="text-base text-gray-500 dark:text-gray-400">Načítám články…</p>
        )}

        {!loading && posts.length > 0 && (
          <ul className="space-y-10 list-none p-0 m-0">
            {posts.map((post, i) => (
              <li key={i}>
                <h3 className="font-serif text-[1.35rem] text-dark dark:text-white font-normal mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-3">
                  {formatDate(post.pubDate)}
                </p>
                {post.excerpt && (
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-[1.7] mb-4">
                    {post.excerpt}
                  </p>
                )}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('newsletter_subscription_started')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark dark:text-white hover:text-accent transition-colors group"
                >
                  Číst <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-base text-gray-500 dark:text-gray-400 mb-8">Články se nepodařilo načíst.</p>
        )}

        <div className="mt-12">
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture('newsletter_subscription_started')}
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-dark dark:bg-white dark:text-dark text-white rounded-full text-sm font-medium font-sans transition-all duration-300 hover:bg-accent dark:hover:bg-accent dark:hover:text-white hover:-translate-y-0.5"
          >
            Sledovat na Substacku →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
