import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
        >
          Simplifying Frontier Technology 
          <br />
          for a Safer, Smarter Future
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Aesop Consulting bridges the gap between cutting-edge innovation and practical, secure solutions. 
          We make emerging technologies accessible, empowering organizations to thrive in a tech-driven world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md rounded-sm text-lg font-medium hover:bg-gray-800 transition-colors"
          >
           Transform your technology journey today.
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;