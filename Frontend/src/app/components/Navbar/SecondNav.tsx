import React, { useState } from "react"
import { Cart, User } from "../../../images/Images"
import NavItem from "./FirrstNavItem"

const useOfLaptop = ["Business", "Gaming", "Creators", "Student"]

const SecondNav = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const handleDropDown = (id: any) => {
    setOpenDropdownId(openDropdownId === id ? null : id)
  }

  const navItems = [
    {
      id: 1,
      title: User,
      col: "#000000",
      padding: "pt-1",
      items: ["login", "signIn"],
    },
    {
      id: 2,
      title: Cart,
      col: "#000000",
      padding: "pt-1",
      items: ["about", "support"],
    },
  ]

  return (
    <div className="mx-auto w-1/2">
      <nav className="fixed pt-3 hidden md:flex md:justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl mr-40">Zaid</h1>
        </div>
        <div className="mr-40">
          {useOfLaptop.map((laptop, index) => (
            <span key={index} className="pr-10 pt-3">
              {laptop}
            </span>
          ))}
        </div>

        <div className="flex flex-row ">
          {navItems.map(item => (
            <div
              key={item.id}
              className="relative mr-4"
            >
              <div
                tabIndex={0}
                role="button"
                onClick={() => handleDropDown(item.id)}
                className="btn m-1 "
              >
                
                <NavItem key={item.id} item={item}/>
              </div>
              {openDropdownId === item.id && (
                <ul
                  tabIndex={0}
                  className="absolute dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-3 shadow"
                >
                  {item.items.map((subItem, index) => (
                    <>
                      <li
                        onClick={() => handleDropDown(null)}
                        key={index}
                        typeof="button"
                        className="hover:bg-emerald-400 hover:cursor-pointer"
                      >
                        <a>{subItem}</a>
                      </li>
                      <hr className="h-px mt-2  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default SecondNav


