import type React from 'react';
import { useState } from 'react';

interface NavItemProps {
    id: number;
    title: React.ReactNode;
    col: string;
    padding: string;
  }
  const NavItem: React.FC<{ item: NavItemProps }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      key={item.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-block',
        width: '40px',
        height: '40px',
        color: isHovered ? item.col : '#6b7280', // Hover color and default color
        transition: 'color 0.3s ease' // Smooth transition
      }}
      className={`px-10 cursor-pointer text-3xl ${item.padding}`}
    >
      {item.title}
    </li>
  );
};

export default NavItem;