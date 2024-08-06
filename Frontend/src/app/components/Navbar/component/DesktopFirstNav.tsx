import type React from 'react'
import type { NavItem as NavItemType } from "../../../types/Product";
import NavItem from '../FirstNavItem';
import { Link } from 'react-router-dom';


interface DesktopNavProps {
    navItems: NavItemType[];
    role: string;
  }
const DesktopFirstNav : React.FC<DesktopNavProps> = ({ navItems, role })=> {
  return (
    <div className="flex justify-start">
    <nav className="fixed w-3/4 hidden md:flex">
      <div className="mx-auto justify-between ">
        <div className="flex flex-row">
          <ul>
            {navItems.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        </div>
        <div className="pt-4  justify-center">
          {role === "admin" ? <p><Link to="/adminPanel">Admin</Link></p> : <p>Hello</p>}
        </div>  
    </nav>
  </div>
  )
}

export default DesktopFirstNav