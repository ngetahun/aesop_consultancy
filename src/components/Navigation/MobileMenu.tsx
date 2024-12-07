import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
        >
          <div className="flex flex-col p-4 space-y-2">
            <NavLink href="#vision">Vision</NavLink>
            <NavLink href="#about">About us</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;