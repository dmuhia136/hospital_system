import React from "react";
import { FaListAlt } from "react-icons/fa";
import sidenavs from "../constants/NavLinks";

function AsideBar({click,toggled}) {
  return (
    <div className="h-[100%] fixed bg-gray-700 divide-y divide-gray-900">
      <div className="flex justify-between items-center p-4">
        <img
          src="/stethascope.png"
          className="bg-blend-normal rounded-full w-[30px]"
        />
        <FaListAlt color="gold" size={25} onClick={click} />
      </div>
      <div className="flex justify-around items-center p-5">
        <img
          src="/person.png"
          className="bg-blend-normal rounded-full w-[30px] h-[30px]"
        />
        <div>
          <p className="text-md font-semibold text-white ">Welcome.</p>
          <p className="text-white font-bold text-lg ">admin</p>
        </div>
      </div>
      <div className="space-y-8 pt-10 p-4">
        {sidenavs.map((item, index) => {
          return (
            <div  key={index} className="hover:bg-gray-900 h-[40px] rounded-lg hover:text-white p-2">
              <a href={item.to} className="flex items-center gap-x-4">
                {item.icon}
                <span className="text-gray-500 text-semibold">
                  {item.title}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AsideBar;
