import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload } from 'react-icons/fi'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Know Me Better</h2>
          <p className="section-subtitle">
            Passionate Android developer dedicated to creating impactful mobile experiences
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <img src="images/coding.gif" alt="Coding" className="about-image" />
              <div className="about-experience-badge">
                <span className="exp-number">2+</span>
                <span className="exp-text">Years of<br />Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="about-heading">
              I'm Sartaj Qamar, a passionate
              <span className="gradient-text"> Android Developer</span>
            </h3>

            <div className="about-text">
              <p>
                Energetic and curiosity-driven Android developer with 2+ years of experience
                writing top-quality clean code for high-paced businesses.
              </p>
              <p>
                Eager to build smooth apps, products and delivering an incredible user experience.
                In previous roles I created a chat app (500K+ downloads to date) with crash-free 99.2%.
              </p>
            </div>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Sartaj Qamar</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">sartajqamar111@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Islamabad, Pakistan</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value available">Available for Freelance</span>
              </div>
            </div>

            <a href="cv/Sartaj_Android_developer_Resume.pdf" download className="btn-primary">
              <span>Download CV</span>
              <FiDownload />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
