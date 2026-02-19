import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Competencies from './components/Competencies'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Offer from './components/Offer'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Competencies />
        <Tools />
        <Projects />
        <Offer />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
