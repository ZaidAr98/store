
import React from "react";
import Header from "../../pages/Header";

interface Props {
    children:React.ReactNode
}

const Layout = ({children}:Props)=>{
    return (
      <div className="flex flex-col ">
     
       <Header/>
        <div className="">{children}</div>
  
      </div>
    );
}

export default Layout