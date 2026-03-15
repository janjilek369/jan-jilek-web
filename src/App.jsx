import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Competencies from './components/Competencies'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Offer from './components/Offer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const [isDark, toggleTheme] = useTheme()

  return (
    <div id="top" className="min-h-screen bg-white dark:bg-[#0A0A0F] transition-colors duration-300">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Competencies />
        <Tools />
        <Projects />
        <Blog />
        <Testimonials />
        <Offer />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
