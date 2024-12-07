import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  subPoints: string[]; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, subPoints }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul>
        {subPoints.map((point, _) => (
          <li className="">{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
