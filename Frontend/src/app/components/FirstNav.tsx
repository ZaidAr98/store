import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
// import { FaApple } from "react-icons/fa";
// import { SiAsus } from "react-icons/si";
// import { SiLenovo } from "react-icons/si";
// import { SiDell } from "react-icons/si";
// import CustomIcon from "../../images/Hp"
import { Apple, Asus, Dell, HP, Lenovo } from "../../images/Images"
import NavItem from "./FirrstNavItem"
const FirstNav = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navItems = [
    { id: 1, title: Apple, col: "#000000", padding: "pt-1" },
    { id: 2, title: Asus, col: "#0284c7",padding:"pt-1" },
    { id: 3, title:Lenovo , col: "#ef4444",padding:"pt-1" },
    { id: 4, title: HP, col: "#000000", padding: "pt-1" },
    { id: 5, title: Dell, col: "#0284c7",padding:"pt-1" }
  ]

  return (
    <>
      <div className="flex justify-center">
        <nav className="fixed w-1/2">
          <div className="mx-auto justify-between">
            <ul className="flex flex-row">
              {navItems.map(item => (
                <NavItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default FirstNav
