import React from 'react'
// import { GiScorpion } from "react-icons/gi";

const firstNavbar = () => {
  return (
    <div className='bg-gray-100 py-1'>
    <nav className="grid grid-cols-9 gap-4 ">
  {/* <div className="col-start-1 col-end-1 pl-5">
    <GiScorpion  size="30px"/>
  </div> */}
  <div className="col-start-9 col-end-9">
    <div className='grid grid-cols-4'>
  <div className='col-start-1 col-end-2'>SignIn</div>
  <div className='col-start-3 col-span-4'>العربية</div>

</div>
</div>
</nav>

</div>
  )
}

export default firstNavbar