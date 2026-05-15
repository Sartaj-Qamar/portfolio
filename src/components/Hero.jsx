import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io5'
import './Hero.css'

const roles = ['Android Developer', 'Kotlin Expert', 'Mobile Engineer', 'UI/UX Enthusiast']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1))
      }, isDeleting ? 40 : 80)
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section className="hero section" id="hero">
      <div className="hero-bg-accent"></div>
      <div className="hero-bg-accent-2"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            Available for work
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sartaj Qamar</span>
            <br />
            <span className="hero-role">
              {text}<span className="typing-cursor">|</span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I craft high-performance Android applications with clean architecture,
            modern UI/UX design, and seamless user experiences. Passionate about
            building products that make a difference.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#contact" className="btn-primary">
              <span>Let's Talk</span>
              <FiArrowRight />
            </a>
            <a href="cv/Sartaj_Android_developer_Resume.pdf" download className="btn-outline">
              <span>Download CV</span>
              <FiDownload />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="socials-label">Find me on</span>
            <div className="social-links">
              <a href="mailto:sartajqamar111@gmail.com" className="social-link" aria-label="Email">
                <FiMail />
              </a>
              <a href="https://www.linkedin.com/in/sartaj-qamar/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://github.com/Sartaj-Qamar" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://wa.me/+923362203156" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <IoLogoWhatsapp />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">App Downloads</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">99.2%</span>
              <span className="stat-label">Crash Free</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-glow"></div>
            <div className="hero-ring hero-ring-1"></div>
            <div className="hero-ring hero-ring-2"></div>
            <div className="hero-ring hero-ring-3"></div>
            <div className="hero-image-container">
              <img src="images/main.jpg" alt="Sartaj Qamar" className="hero-image" />
            </div>
            <div className="hero-floating-badge badge-kotlin">
              <span>Kotlin</span>
            </div>
            <div className="hero-floating-badge badge-android">
              <span>Android</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
