import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogo: React.FC = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center cursor-pointer"
    >
      <span className="text-2xl font-serif font-bold text-gray-900">Aesop</span>
      <span className="ml-2 text-sm text-gray-600 font-light">Consultancy</span>
    </motion.div>
  );
};

export default CompanyLogo;