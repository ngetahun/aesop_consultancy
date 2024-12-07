import React from 'react';
import NavLink from './NavLink';

const NavLinks: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLink href="#vision">Vision</NavLink>
      <NavLink href="#about">About us</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
};

export default NavLinks;