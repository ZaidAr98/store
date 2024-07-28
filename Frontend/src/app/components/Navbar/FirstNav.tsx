// import React, { useState } from "react"
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
// import { Apple, Asus, Cart, Dell, HP, Lenovo, User } from "../../../images/Images"
// import NavItem from "./FirrstNavItem"
// const FirstNav = () => {
//   const [nav, setNav] = useState(false)

//   const handleNav = () => {
//     setNav(!nav)
//   }
//   // Array containing navigation items
//   const navItems = [
//     { id: 1, title: Apple, col: "#000000", padding: "pt-1" },
//     { id: 2, title: Asus, col: "#0284c7", padding: "pt-1" },
//     { id: 3, title: Lenovo, col: "#ef4444", padding: "pt-1" },
//     { id: 4, title: HP, col: "#000000", padding: "pt-1" },
//     { id: 5, title: Dell, col: "#0284c7", padding: "pt-1" },
//   ]
//   const logItems = [
//     {
//       id: 1,
//       title: User,
//       col: "#000000",
//       padding: "pt-1",
//       items: ["login", "signIn"],
//     },
//     {
//       id: 2,
//       title: Cart,
//       col: "#000000",
//       padding: "pt-1",
//       items: ["about", "support"],
//     },
//   ]
 
//     const [openDropdownId, setOpenDropdownId] = useState(null)
  
//     const handleDropDown = (id: any) => {
//       setOpenDropdownId(openDropdownId === id ? null : id)
//     }


//   return (
//     <>
//       <div className="bg-slate-100">
//         {/* Mobile Navigation Icon */}
//         <div onClick={handleNav} className="md:hidden ">
//           {nav ? (
//             <AiOutlineClose size={20} className="absolute top-4 left-4 z-30" />
//           ) : (
//             <AiOutlineMenu size={20} className="absolute top-4 z-30  left-4" />
//           )}
//         </div>
//     {/* Mobile Navigation Login Icon */}
//     <div className="flex flex-row  md:hidden  absolute top-1 right-5">
//           {logItems.map(item => (
//             <div key={item.id} className="relative mr-10 ">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 onClick={() => handleDropDown(item.id)}
//                 className="btn m-1"
    
//               >
//                 <NavItem key={item.id} item={item}/>
//               </div>
//               {openDropdownId === item.id && (
//                 <ul tabIndex={0} className="absolute  dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
//                   {item.items.map((subItem, index) => (
//                     <><li  onClick={()=>handleDropDown(null)} key={index} typeof="button" className="hover:bg-emerald-400 hover:cursor-pointer">
//                       <a>{subItem}</a>
//                     </li><hr className="h-px mt-2  bg-gray-200 border-0 dark:bg-gray-700"></hr></>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div> 




//         {nav && (
//           <div
//             className="fixed inset-0 bg-black w-[100%]  bg-opacity-50 z-10"
//             onClick={handleNav}
//           />
//         )}
//         <ul
//           className={
//             nav
//               ? "fixed md:hidden z-20 left-0 top-0 w-[60%] h-full  border-r border-r-gray-100 bg-slate-100 ease-in-out duration-500 overflow-y-scroll"
//               : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
//           }
//         >
//           {navItems.map(item => (
//             <div className="flex pt-5 flex-col">
//               <div className="relative -bottom-80">
//                 <NavItem key={item.id} item={item} />
//                 <hr className="h-px mt-2  bg-gray-200 border-0 dark:bg-gray-700"></hr>
//               </div>
//             </div>
//           ))}
//         </ul>
//      {/* Desktop Navigation */}
//         <div className="flex justify-start">
//           <nav className="fixed w-1/2 hidden md:flex ">
//             <div className="mx-auto justify-between">
//               <ul className="flex flex-row">
//                 {navItems.map(item => (
//                   <NavItem key={item.id} item={item} />
//                 ))}
//               </ul>
//             </div>
//           </nav>
//         </div>
//         <hr className="h-px mt-12  bg-gray-200 border-0 dark:bg-gray-700"></hr>
//       </div>
//     </>
//   )
// }

// export default FirstNav


import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Apple, Asus, Cart, Dell, HP, Lenovo, User } from "../../../images/Images"
import NavItem from "./FirrstNavItem"

const FirstNav = () => {
  const [nav, setNav] = useState(false)
  const [openDropdownId, setOpenDropdownId] = useState(null)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleDropDown = (id: any) => {
    setOpenDropdownId(openDropdownId === id ? null : id)
  }

  const navItems = [
    { id: 1, title: Apple, col: "#000000", padding: "pt-1" },
    { id: 2, title: Asus, col: "#0284c7", padding: "pt-1" },
    { id: 3, title: Lenovo, col: "#ef4444", padding: "pt-1" },
    { id: 4, title: HP, col: "#000000", padding: "pt-1" },
    { id: 5, title: Dell, col: "#0284c7", padding: "pt-1" },
  ]

  const logItems = [
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
    <>
      <div className="bg-slate-100">
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="absolute top-4 left-4 z-30" />
          ) : (
            <AiOutlineMenu size={20} className="absolute top-4 z-30 left-4" />
          )}
        </div>

        {/* Mobile Navigation Login Icon */}
        <div className="flex flex-row md:hidden absolute top-1 right-5">
          {logItems.map(item => (
            <div key={item.id} className="relative mr-10">
              <div
                tabIndex={0}
                role="button"
                onClick={() => handleDropDown(item.id)}
                className="btn m-1"
              >
                <NavItem key={item.id} item={item} />
              </div>
              {openDropdownId === item.id && (
                <ul tabIndex={0} className="absolute dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                  {item.items.map((subItem, index) => (
                    <React.Fragment key={index}>
                      <li onClick={() => handleDropDown(null)} className="hover:bg-emerald-400 hover:cursor-pointer">
                        <a>{subItem}</a>
                      </li>
                      <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    </React.Fragment>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {nav && (
          <div className="fixed inset-0 bg-black w-[100%] bg-opacity-50 z-10" onClick={handleNav} />
        )}
        <ul
          className={
            nav
              ? "fixed md:hidden z-20 left-0 top-0 w-[60%] h-full border-r border-r-gray-100 bg-slate-100 ease-in-out duration-500 overflow-y-scroll"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {navItems.map(item => (
            <div key={item.id} className="flex pt-5 flex-col">
              <div className="relative -bottom-80">
                <NavItem key={item.id} item={item} />
                <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
            </div>
          ))}
        </ul>

        {/* Desktop Navigation */}
        <div className="flex justify-start">
          <nav className="fixed w-1/2 hidden md:flex">
            <div className="mx-auto justify-between">
              <ul className="flex flex-row">
                {navItems.map(item => (
                  <NavItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <hr className="h-px mt-12 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </>
  )
}

export default FirstNav
