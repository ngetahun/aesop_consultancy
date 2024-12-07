import React, { useState } from 'react';
import CompanyLogo from './CompanyLogo';
import NavLinks from './NavLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <CompanyLogo />
          <NavLinks />
          <MobileMenuButton onClick={toggleMobileMenu} />
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;