import React from "react";
import { FaAmbulance } from "react-icons/fa";

function Services({count,color,icon,job}) {
  return (
    <div className="flex shadow-lg relative hover:bg-gray-600 gap-x-3 border-gray-800 border-solid bg-gray-100 p-4 rounded-xl">
      <div className="pt-10 pl-10 space-y-5 z-50">
        <p className={ `${color} text-4xl font-bold`}>{count}</p>
        <p className={ `${color} text-4xl font-bold`}>{job}</p>
      </div>
      <div className="absolute bottom-0 right-0">
        {icon}</div>
    </div>
  );
}

export default Services;
