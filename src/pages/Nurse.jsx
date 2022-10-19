import { Switch } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa";
import AsideBar from "../components/AsideBar";
import nurses from "../constants/NursesList";

const label = { inputProps: { "aria-label": "Size switch demo" } };
function Nurse() {
  return (
    <div className="flex">
      {/* Aside bar */}
      <div className="w-2/12 only-mobile non-mobile">
        <AsideBar />
      </div>
      {/* Main dashbord */}
      <div className="w-10/12">
        <div className="pt-10 flex place-content-center">
          <p className="text-xl text-gray-500 font-semibold">Nurses</p>
        </div>
        <div className="flex justify-end pr-10">
          <button className="flex items-center gap-x-2 rounded-lg p-3 text-white font-semibold bg-blue-500">
            <FaPlus /> Add New
          </button>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 gap-y-5 pl-2 pr-10 pt-10">
          {nurses.map((nurse, index) => (
            <div key={index} className="shadow-sm flex p-1 hover:shadow-xl">
              <div className="w-7/12">
                <img
                  src={
                    nurse.gender === "male"
                      ? "/male_nurse.png"
                      : "/female_nurse.png"
                  }
                />
              </div>
              <div className="w-5/12 p-1 relative">
                <p className="text-lg font-medium "> {nurse.name}</p>
                <p className="text-sm "> {nurse.contact}</p>
                <p className="text-md "> {nurse.gender.toLocaleUpperCase()}</p>
                <p className="text-md ">Age: {nurse.age}</p>
                <p
                  className={
                    nurse.onduty
                      ? "p-1 w-[70px] items-center text-white bg-green-500 rounded-lg text-sm"
                      : "p-1 w-[70px] items-center text-white bg-red-500 rounded-lg text-sm"
                  }
                >
                  {nurse.onduty ? "On duty" : "Off duty"}
                </p>
                <Switch {...label} checked={nurse.onduty} size="small" />

                <p className="absolute bottom-0">
                  <span className="text-white bg-red-500 rounded-lg p-1">
                    Delete
                  </span>
                  <span className="p-1"></span>
                  <span className="text-white bg-blue-500 rounded-lg p-1">
                    Edit
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nurse;
