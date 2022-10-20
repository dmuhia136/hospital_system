import React, { useState } from "react";
import AsideBar from "../components/AsideBar";
import AddDoctor from "../components/functional/AddDoctor";
import { Switch } from "@mui/material";
import fetchDoctor from "../functions/Fetch";
import { useQuery } from "react-query";
import axios from "axios";

function Doctor() {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [duty, setDuty] = useState(false);
  const { data, isError, isLoading } = useQuery("doctor", fetchDoctor, {
    staleTime: 1000,
  });
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  const handleDuty = async (id,event) => {
    event.preventDefault();
    setDuty((prev) => !prev);
    var setData = {
      onduty: duty,
    };
    var response = await axios.patch(
      "192.168.0.102:4000/doctor/" + id,
      setData
    );
    console.log(response);
  };
  if (isError) {
    return <div>Error occured ...</div>;
  }
  if (isLoading) {
    return <div>Loadinng...</div>;
  }
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
          <AddDoctor />
        </div>
        <div
          className={
            `${toggleAdd === false}` ? "hidden" : "block h-10 bg-blue-800"
          }
        >
          <AddDoctor />
        </div>

        <div className=" grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 gap-y-5 pl-2 pr-10 space-y-5">
          {data.data.body.map((row, index) => (
            <div
              className="shadow-md w-[300px] h-[200px] flex hover:shadow-xl p-2"
              key={index}
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
                <Switch
                  checked={row.onduty}
                  onClick={()=>handleDuty.bind(row._id)}
                  size="small"
                />

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
