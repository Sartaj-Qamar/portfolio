import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiSmartphone, FiMonitor, FiGrid, FiCode, FiPenTool } from 'react-icons/fi'
import './Services.css'

const services = [
  {
    icon: <FiSmartphone />,
    title: 'Mobile App Development',
    desc: 'I design and build high-performance Android apps using Kotlin and modern architecture patterns like MVVM. My focus is on clean UI, smooth navigation, and excellent user experience.',
  },
  {
    icon: <FiMonitor />,
    title: 'Responsive Applications',
    desc: 'Every app I create is fully responsive, ensuring seamless performance across phones, tablets, and foldable devices. I optimize layouts for all screen sizes.',
  },
  {
    icon: <FiGrid />,
    title: 'Dynamic Layouts',
    desc: 'I implement flexible and efficient grid layouts using RecyclerView and custom adapters, allowing dynamic content display that feels smooth and visually balanced.',
  },
  {
    icon: <FiCode />,
    title: 'Clean Architecture',
    desc: 'I follow best coding practices with clean architecture, modular design, and clear documentation, making the code easy to maintain, scale, and collaborate on.',
  },
  {
    icon: <FiPenTool />,
    title: 'UI/UX Design',
    desc: 'I translate creative ideas into pixel-perfect interfaces using Material Design principles, focusing on intuitive layouts, animations, and consistent visual identity.',
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Services</span>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Specialized services to bring your mobile app ideas to life
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
