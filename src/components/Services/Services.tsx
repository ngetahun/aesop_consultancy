import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Providing Frontier Technology Expertise',
    description: "We help organizations harness the power of the most advanced technologies. From AI and machine learning to blockchain, IoT, and quantum computing, our experts break down complex innovations into practical applications that deliver measurable results. Whether you're exploring automation or revolutionizing your processes, we guide you every step of the way.",
    icon: '🎯',
    subPoints:[
      "AI and Machine Learning: Ensuring ethical AI deployment and training models to fit client needs.",
      "Blockchain Solutions: Making blockchain technology accessible for non-technical industries.",
      "IoT Security: Helping businesses adopt IoT while safeguarding networks.",
      "Quantum Computing: Simplifying quantum technology for real-world applications."
    ]
  },
  {
    title: 'Accessibility and Adoption',
    description: 'Adopting new technology shouldn\'t be daunting. We make the process seamless by offering tech readiness assessments, custom training programs, and user-centric design strategies. Our goal is to simplify even the most sophisticated technologies, ensuring they are intuitive, efficient, and scalable for your organization.',
    icon: '💻',
    subPoints:[
      "Tech Readiness Assessments: Evaluate clients' infrastructure for adopting new tech.",
      "Training Programs: Demystify complex technologies for leadership and teams.",
      "User-Centric Design: Making technology intuitive and user-friendly."
    ]
  },
  {
    title: ' Safety and Ethics',
    description: 'Technology moves fast, but safety and responsibility come first. We specialize in cybersecurity solutions, ensuring that your systems are protected from the latest threats. Additionally, we develop ethical technology policies to guide responsible tech adoption, while navigating the complex landscape of regulatory compliance so your business stays ahead of the curve.',
    icon: '⚡',
    subPoints: [
      "Cybersecurity: Protecting clients from new risks introduced by advanced tech.",
      "Ethical Tech Policy Development: Helping organizations adopt frontier tech responsibly.",
      "Regulatory Compliance: Ensuring adherence to global technology standards."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;