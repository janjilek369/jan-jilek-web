import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { posthog } from '../lib/posthog'

const projects = [
  { tag: 'VLASTNÍ PRODUKT', title: 'Webináře Gamma pro školy', desc: 'Vlastní produkt. Od tvorby obsahu přes prodejní stránku až po realizaci. Školím učitele, jak s AI nástrojem Gamma vytvářet moderní výukové materiály za zlomek času.', href: 'https://gamma-pro-ucitele-0rqz3vc.gamma.site/', linkText: 'Zobrazit', captureEvent: 'gamma_training_clicked' },
  { tag: 'WEB', title: 'modernivyuka.digital', desc: 'Kompletní web vytvořený s pomocí AI. Od obsahu přes design po nasazení. Dva dny práce, žádný externí tým.', href: 'https://modernivyuka.digital', linkText: 'Navštívit', captureEvent: null },
  { tag: 'BLOG', title: 'Substack / AI v praxi', desc: 'Pravidelné články o tom, jak AI reálně pomáhá v každodenní práci. Praktické tipy, žádné buzzwordy.', href: 'https://substack.com/@jilekjan', linkText: 'Číst články', captureEvent: 'newsletter_subscription_started' },
  { tag: 'AI PROJEKT', title: 'TCO kalkulačka', desc: 'Nástroj pro školy, který ukáže celkové náklady na technologie za 3–7 let. Postaveno s AI, bez programátora, bez externího týmu.', href: 'https://tco-kalkulacka.vercel.app/', linkText: 'Vyzkoušet', captureEvent: null },
  { tag: 'EVENT', title: 'Konference pro učitele', desc: 'Spolupořádám konferenci pro 200+ učitelů, kde prezentuji technologické služby a novinky pro školy.', href: 'https://ucitelskysummit.cz', linkText: 'Navštívit', captureEvent: null },
  { tag: 'AI PROJEKT', title: 'Tento web', desc: 'Navržený a postavený s pomocí AI za jedno odpoledne. Design, texty, kompletní realizace.', scrollToTop: true, linkText: 'Jsi tady', captureEvent: null },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 px-8 bg-gray-50 dark:bg-[#111114] ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          Portfolio
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark dark:text-white font-normal tracking-tight mb-6 leading-[1.15]">
          Důkazy, ne sliby
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[600px] leading-[1.7] mb-0">
          Vlastní projekty od nápadu přes realizaci po propagaci. Tady je výběr.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-8 md:p-10 lg:py-10 lg:px-8 border border-gray-100 dark:border-gray-800 rounded-xl bg-white dark:bg-[#18181B] flex flex-col transition-all duration-[0.4s] ease-smooth hover:border-accent-light dark:hover:border-accent/30 hover:shadow-card-hover dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-accent mb-4">
                {p.tag}
              </div>
              <h3 className="font-serif text-[1.35rem] text-dark dark:text-white font-normal mb-3">
                {p.title}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-[1.7] flex-1">
                {p.desc}
              </p>
              {p.scrollToTop ? (
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-dark dark:text-white hover:text-accent transition-colors group"
                >
                  {p.linkText} <ArrowIcon />
                </a>
              ) : p.href ? (
                <a
                  href={p.href}
                  target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => p.captureEvent && posthog.capture(p.captureEvent)}
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-dark dark:text-white hover:text-accent transition-colors group"
                >
                  {p.linkText} <ArrowIcon />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
