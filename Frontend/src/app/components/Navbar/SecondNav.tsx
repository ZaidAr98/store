import React, { useState } from "react"
import { Cart, User } from "../../../images/Images"
import NavItem from "./FirrstNavItem"
import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hooks"
import { logout } from "../../reducers/authSlice"
import { useAppDispatch } from "../../hooks"
import {useSignOutMutation } from "../../services/LoginApi"
const useOfLaptop = ["Business", "Gaming", "Creators", "Student"]

const SecondNav = () => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null)
  const handleDropDown = (id: number | null) => {
    setOpenDropdownId(openDropdownId === id ? null : id)
  }
  const [
    signOut ] = useSignOutMutation();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const logoutHandler = async () => {
    try {
      await signOut().unwrap();
      dispatch(logout())
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  const userId = useAppSelector((state: any) => state.auth.userId)

  const navItems = [
    {
      id: 1,
      title: User,
      col: "#000000",
      padding: "pt-1",
      items: [
        { name: "login", link: "/login" },
        { name: "signUp", link: "/register" },
      ],
    },
    {
      id: 2,
      title: Cart,
      col: "#000000",
      padding: "pt-1",
      items: [
        { name: "about", link: "/about" },
        { name: "support", link: "/support" },
      ],
    },
  ]

  const LoginItem = [
    {
      id: 1,
      title: User,
      col: "#000000",
      padding: "pt-1",
      items: [{ name: "logout", link: "/" }],
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
        {userId ? (
           <div className="flex flex-row ">
           {LoginItem.map(item => (
             <div key={item.id} className="relative mr-4">
               <div
                 tabIndex={0}
                 role="button"
                 onClick={() => handleDropDown(item.id)}
                 className="btn m-1 "
               >
                 <NavItem key={item.id} item={item} />
               </div>
               {openDropdownId === item.id && (
                 <ul
                   tabIndex={0}
                   className="absolute dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-3 shadow"
                 >
                   {item.items.map((subItem, index) => (
                     <React.Fragment key={index}>
                       <li
                         onClick={() => handleDropDown(null)}
                         typeof="button"
                         className="hover:bg-emerald-400 hover:cursor-pointer"
                       >
                         <Link
                          to={subItem.link}
                           onClick={e => {
                             logoutHandler()
                           }}
                         >
                           {subItem.name}
                         </Link>
                       </li>
                       <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                     </React.Fragment>
                   ))}
                 </ul>
               )}
             </div>
           ))}
         </div>
          
        ) : (

<div className="flex flex-row ">
            {navItems.map(item => (
              <div key={item.id} className="relative mr-4">
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => handleDropDown(item.id)}
                  className="btn m-1 "
                >
                  <NavItem key={item.id} item={item} />
                </div>
                {openDropdownId === item.id && (
                  <ul
                    tabIndex={0}
                    className="absolute dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-3 shadow"
                  >
                    {item.items.map((subItem, index) => (
                      <React.Fragment key={index}>
                        <li
                          onClick={() => handleDropDown(null)}
                          typeof="button"
                          className="hover:bg-emerald-400 hover:cursor-pointer"
                        >
                          <Link to={subItem.link}>{subItem.name}</Link>
                        </li>
                        <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
         
        )}
      </nav>
    </div>
  )
}

export default SecondNav
