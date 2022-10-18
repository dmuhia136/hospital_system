import React, { useState } from "react";
import AsideBar from "../components/AsideBar";
import Dashboard from "../components/Dashboard";

function HomePage() {
  const [toggle, setToggle] = useState(false);
  const handleToggle=()=>{
    setToggle(true)
    console.log("toggle");
  }
  return (
    <div className="flex">
      {/* Aside bar */}
      <div className="w-2/12 only-mobile non-mobile">
        <AsideBar click={handleToggle} toggled={toggle}/>
      </div>
      {/* Main dashbord */}
      <div className="w-10/12">
        <Dashboard />
      </div>
    </div>
  );
}

export default HomePage;
