import React from "react";
import { GiScorpion } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";

const secondNavbar = () => {
  return (
    <nav className="grid grid-cols-5 gap-2 pt-7">
      <div className="col-start-1 col-end-1 pl-5 text-left">
        <GiScorpion size="30px" />
      </div>
      <div className="col-start-3 col-end-3 pl-5 ">
        <div className="grid grid-cols-4">
          <div className="col-start-1 col-end-1">Features</div>
          <div className="col-start-2 col-span-2">Sales</div>
        </div>
      </div>
      <div className="col-start-5 col-end-5 pt-3 ">
      <form
      className="-mt-8 p-2 border-none grid grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 items-center gap-4"
    >
      <div className="flex   justify-between items-center onclick:border-none bg-gray-100 p-2 rounded-full">
      <MdTravelExplore size={25}/>
        <input
          placeholder="Search..."
          className="text-md w-full bg-gray-100 ml-2 focus:outline-none  "
        />
      </div>
    </form>
      </div>
    </nav>
  );
};

export default secondNavbar;
