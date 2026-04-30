import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Portfolio', href: 'portfolio' },
  { name: 'Skills', href: 'skills' },
  { name: 'Resume', href: 'resume' },
  { name: 'Contact', href: 'contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => document.getElementById(l.href)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop - 120 <= window.scrollY) {
          setActiveSection(navLinks[i].href)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-container">
        <motion.a
          className="navbar-logo"
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">SQ</span>
        </motion.a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
                onClick={() => scrollTo(link.href)}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div className="active-indicator" layoutId="activeNav" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <motion.button
            className="btn-primary hire-btn"
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Hire Me</span>
          </motion.button>

          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                className={`mobile-link ${activeSection === link.href ? 'active' : ''}`}
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
