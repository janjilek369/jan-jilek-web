import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'about', label: 'O mně' },
  { id: 'experience', label: 'Zkušenosti' },
  { id: 'projects', label: 'Projekty' },
  { id: 'blog', label: 'Blog' },
  { id: 'offer', label: 'Nabídka' },
  { id: 'contact', label: 'Kontakt' },
]

const Navigation = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[0.4s] ease-smooth ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0A0A0F]/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="font-sans font-semibold text-[1.1rem] text-dark dark:text-white tracking-tight"
        >
          Jan Jílek
        </button>

        <ul className="hidden md:flex gap-10 list-none">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollTo(id)}
                className="text-gray-500 dark:text-gray-400 text-base font-medium tracking-wide hover:text-dark dark:hover:text-white transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-dark dark:text-white"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen &&
        createPortal(
          <div
            className="md:hidden fixed inset-0 w-screen min-h-screen bg-white dark:bg-[#0A0A0F] z-[9999] flex flex-col pt-20 px-8"
            style={{ minHeight: '100dvh' }}
            aria-hidden={!mobileOpen}
          >
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-8 p-2 text-dark dark:text-white"
              aria-label="Zavřít menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="block w-full text-left py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-dark dark:hover:text-white text-lg border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                {label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </nav>
  )
}

export default Navigation
