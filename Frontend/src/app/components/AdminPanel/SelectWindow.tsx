    
import React from 'react'
import { Link,useLocation} from "react-router-dom";

const SelectWindow = () => {
  const currentPath = useLocation()
  const items = [
    { href: "/adminPanel/purchases", label: 'Purchases' },
    { href: "/adminPanel/addProduct", label: 'Add Prdoucts' },
    { href:"/adminPanel/products", label: 'Products' },
  ];
  return (
    <div
    className=" rounded-lg bg-white text-center text-surface shadow-xl text-surface p-10 grid grid-rows-4  gap-4">
     
     {items.map(item => (
     
     <button  key={item.href}
      type="button"
      className={currentPath.pathname === item.href?"inline-block rounded bg-lime-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out border border-Neutral-900":"inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out border border-Neutral-900"}
      >
      <Link to={item.href}>
      <p className="text-left py-3 text-xl font-medium ">{item.label}</p>
      </Link>
      </button>
 
      ))
    }
   
    </div>
  )
}

export default SelectWindow