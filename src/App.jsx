import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ParticlesBackground from './components/ParticlesBackground'
import './index.css'

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
