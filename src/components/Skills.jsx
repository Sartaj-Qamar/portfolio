import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const mainSkills = [
  { name: 'Java', icon: 'images/skills/icons8-java.svg' },
  { name: 'Kotlin', icon: 'images/skills/icons8-kotlin.svg' },
  { name: 'Android', icon: 'images/skills/icons8-android-os.svg' },
  { name: 'Firebase', icon: 'images/skills/icons8-firebase.svg' },
  { name: 'GitHub', icon: 'images/skills/icons8-github (1).svg' },
  { name: 'Git', icon: 'images/skills/icons8-git.svg' },
]

const otherSkills = [
  'OOP',
  'Design Patterns',
  'MVVM / MVC / MVP',
  'DataStore DB',
  'Material Design',
  'Dagger Hilt / Koin',
  'Navigation Components',
  'Room Database',
  'Retrofit',
  'Coroutines & Flow',
  'FCM',
  'Ktor',
  'Jetpack Compose',
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <div className="skills-main-grid">
          {mainSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="skill-icon-wrapper">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="other-skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="other-skills-title">Other Technologies</h3>
          <div className="other-skills-grid">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="other-skill-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.04 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(108, 99, 255, 0.5)' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
