import { useState, useEffect } from 'react'

const navItems = [
  { id: 'about', label: 'O mně' },
  { id: 'experience', label: 'Zkušenosti' },
  { id: 'projects', label: 'Projekty' },
  { id: 'offer', label: 'Nabídka' },
  { id: 'contact', label: 'Kontakt' },
]

const Navigation = () => {
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
          ? 'bg-white backdrop-blur-lg border-b border-gray-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="font-sans font-semibold text-[1.1rem] text-dark tracking-tight"
        >
          Jan Jílek
        </button>

        <ul className="hidden md:flex gap-10 list-none">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollTo(id)}
                className="text-gray-500 text-base font-medium tracking-wide hover:text-dark transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-dark"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-8 pb-4">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="block w-full text-left py-2 text-gray-500 font-medium hover:text-dark"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
