import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-sm/6 font-semibold text-gray-900"
    >
      {children}
    </a>
  );
};

export default NavLink;