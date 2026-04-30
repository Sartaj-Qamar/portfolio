import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiSend } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', subject: '', message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('https://formspree.io/f/xwvyegbv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-info-title">Let's talk about your project</h3>
            <p className="contact-info-desc">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiMapPin />
                </div>
                <div>
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">Hijrat Colony, Karachi</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiPhone />
                </div>
                <div>
                  <span className="contact-card-label">Phone</span>
                  <span className="contact-card-value">+92-336-220-3156</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiMail />
                </div>
                <div>
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">sartajqamar111@gmail.com</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiCheckCircle />
                </div>
                <div>
                  <span className="contact-card-label">Status</span>
                  <span className="contact-card-value available">Available for Freelance</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input form-textarea"
              />
            </div>

            <button type="submit" className="btn-primary submit-btn" disabled={status === 'sending'}>
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              <FiSend />
            </button>

            {status === 'success' && (
              <motion.p
                className="form-status success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="form-status error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
