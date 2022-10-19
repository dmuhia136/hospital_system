import React, { useState } from "react";
import AsideBar from "../components/AsideBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaPlus } from "react-icons/fa";
import AddDoctor from "../components/functional/AddDoctor";
import Tooltip from "@mui/material/Tooltip";
import { Switch } from "@mui/material";

function createData(name, role, contact, onduty, gender) {
  return { name, role, contact, onduty, gender };
}

const rows = [
  createData("John Doe", "Dentist", "jonhn@gmail.com", false, "male"),
  createData("Alice Wonder", "Onchology", "Alice@gmail.com", true, "female"),
  createData("John Snow", "General Doctor", "snow@gmail.com", true, "male"),
  createData("Alison Baker", "Surgeon", "alison@gmail.com", false, "female"),
  createData(
    "Matthew Macchanhey",
    "General Doctor",
    "matthew@gmail.com",
    true,
    "male"
  ),
];
function Doctor() {
  const [toggleAdd, setToggleAdd] = useState(false);
  const handleToggle = (event) => {
    event.preventDefault();
    setToggleAdd((prev) => !prev);
    console.log(toggleAdd);
  };
  return (
    <div className="flex">
      {/* Aside bar */}
      <div className="w-2/12 only-mobile non-mobile">
        <AsideBar />
      </div>
      {/* Main body */}
      <div className="w-10/12 pt-10 pr-10 relative">
        <p className="text-xl font-semibold text-gray-700 pb-10 justify-center place-content-center flex place-items-center">
          List of Doctors
        </p>
        <div className="justify-end flex place-content-end pb-5">
          <button
            onClick={handleToggle}
            className="flex items-center gap-x-2 rounded-lg p-3 text-white font-semibold bg-blue-500"
          >
            <FaPlus /> Add New
          </button>
        </div>
        <div
          className={
            `${toggleAdd === false}` ? "hidden" : "block h-10 bg-blue-800"
          }
        >
          <AddDoctor />
        </div>

        <div className=" grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 gap-y-5 pl-2 pr-10 pt-10 space-y-5">
          {rows.map((row, index) => (
            <div
              className="shadow-md w-[300px] h-[200px] flex hover:shadow-xl p-2"
              key={row.name}
            >
              <div className="w-7/12 ">
                <img
                  src={
                    row.gender === "male"
                      ? "/male_doctor.png"
                      : "/female_doctor.png"
                  }
                  className="h-full brightness-120"
                />
              </div>
              <div className="5/12 relative pl-1">
                <p className="text-sm">{row.name}</p>
                <p className="text-sm">{row.role}</p>
                <p className="text-sm">{row.contact}</p>
                <p
                  className={
                    row.onduty
                      ? "p-1 w-[70px] items-center text-white bg-green-500 rounded-lg text-sm"
                      : "p-1 w-[70px] items-center text-white bg-red-500 rounded-lg text-sm"
                  }
                >
                  {row.onduty ? "On duty" : "Off duty"}
                </p>
                <Switch checked={row.onduty} size="small" />

                <span className="absolute bottom-0 left-2">
                  <span className="text-white bg-red-500 rounded-lg p-1">
                    Delete
                  </span>
                  <span className="p-1"></span>
                  <span className="text-white bg-blue-500 rounded-lg p-1">
                    Edit
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
