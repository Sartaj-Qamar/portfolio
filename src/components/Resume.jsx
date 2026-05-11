import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'
import './Resume.css'

const experiences = [

    {
    title: 'Android Developer',
    company: 'Carecloud Software Company',
    location: 'Bagh Azad Kashmir',
    date: 'Jan 2026 - Present',
    type: 'work',
  },
  {
    title: 'Android Developer',
    company: 'Miltetap Software House',
    location: 'Karachi',
    date: 'Jul 2025 - Dec 2025',
    type: 'work',
  },
  {
    title: 'Android Developer',
    company: 'NineSol Technology',
    location: 'Islamabad',
    date: 'Aug 2024 - Aug 2025',
    type: 'work',
  },

  {
    title: 'Android Developer Intern',
    company: 'Contour Company',
    location: '',
    date: 'Jan 2022 - Mar 2022',
    type: 'work',
  },
  {
    title: 'Freelance Android Developer',
    company: 'Upwork & Freelancer',
    location: 'Remote',
    date: '2014 - Present',
    type: 'work',
  },
  {
    title: 'BS Computer Science',
    company: 'University of Azad Jammu & Kashmir',
    location: '',
    date: '2016 - 2020',
    type: 'education',
  },
]

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="resume section" id="resume" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Resume</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="timeline-dot">
                  <FiBriefcase />
                </div>
                <div className="timeline-card">
                  <span className={`timeline-type ${exp.type}`}>
                    {exp.type === 'work' ? 'Experience' : 'Education'}
                  </span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <div className="timeline-meta">
                    <span className="timeline-date">
                      <FiCalendar /> {exp.date}
                    </span>
                    {exp.location && (
                      <span className="timeline-location">
                        <FiMapPin /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume
