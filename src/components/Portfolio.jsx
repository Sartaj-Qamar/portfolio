import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub, FiDownload } from 'react-icons/fi'
import './Portfolio.css'

const projects = [
  {
    title: 'Tebwtkhayar',
    desc: 'An application that combines all kinds of medical centers in Australia. Built with clean architecture and clean code using KMM.',
    image: 'images/portfolio/project1.png',
    link: 'https://play.google.com/store/apps/details?id=com.tebwtkhayar.application',
    tags: ['KMM', 'Clean Architecture', 'Kotlin'],
  },
  {
    title: 'The Jet',
    desc: 'A new, pleasant and speedy experience to inspire a new image for clients with modern delivery solutions.',
    image: 'images/portfolio/project2.png',
    link: 'https://play.google.com/store/apps/details?id=momentum.solutions.thejet',
    tags: ['Android', 'MVVM', 'Kotlin'],
  },
  {
    title: 'Otbokhly',
    desc: 'The #1 Platform connecting Approved HomeCooks with Nearby Neighbors for wholesome, homemade food delivery.',
    image: 'images/portfolio/project3.png',
    link: 'https://play.google.com/store/apps/details?id=com.techzonelabs.otbokhly',
    tags: ['Android', 'Firebase', 'Kotlin'],
  },
  {
    title: 'Otbokhly Cook',
    desc: 'Restaurant management app. Accept and manage orders on the go with Otbokhly Cook dashboard.',
    image: 'images/portfolio/project4.png',
    link: 'https://play.google.com/store/apps/details?id=com.techzonelabs.otbokhlyCook',
    tags: ['Android', 'REST API', 'Kotlin'],
  },
  {
    title: 'FoodFokr KMM',
    desc: 'A Kotlin Multi-platform project using Ktor, SqlDelight, use cases, Jetpack Compose and clean architecture.',
    image: 'images/portfolio/project5.png',
    link: 'https://github.com/gamalragab21/FoodFokr-KMM',
    isGithub: true,
    tags: ['KMM', 'Compose', 'Ktor'],
  },
  {
    title: 'TalkLive',
    desc: 'A live talk and communication app built with modern Android development practices.',
    image: 'images/portfolio/project5.png',
    link: 'apks/talkLive.apk',
    isApk: true,
    tags: ['Android', 'Kotlin'],
  },
  {
    title: 'Bluetooth Smart',
    desc: 'A Bluetooth device management app for scanning, pairing and communicating with nearby Bluetooth devices.',
    image: 'images/portfolio/project5.png',
    link: 'apks/bluetoothDevice.apk',
    isApk: true,
    tags: ['Android', 'Bluetooth', 'Kotlin'],
  },
]

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="portfolio section" id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my best work and applications
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    {...(project.isApk ? { download: true } : {})}
                  >
                    {project.isApk ? <FiDownload /> : project.isGithub ? <FiGithub /> : <FiExternalLink />}
                    <span>{project.isApk ? 'Download APK' : 'View Project'}</span>
                  </a>
                </div>
              </div>

              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
