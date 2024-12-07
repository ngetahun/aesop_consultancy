import React from 'react';
import { FiMenu } from 'react-icons/fi';

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
      aria-label="Toggle menu"
    >
      <FiMenu className="h-6 w-6 text-gray-700" />
    </button>
  );
};

export default MobileMenuButton;