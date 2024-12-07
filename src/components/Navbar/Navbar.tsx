import React from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../Logo/Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#approach">Our Approach</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button className="md:hidden p-2">
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;