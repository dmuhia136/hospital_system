import React from "react";
import { FaLaptopMedical } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaProcedures } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaPortrait } from "react-icons/fa";

var sidenavs = [
  {
    title: "Dashboard",
    to: "/",
    icon: <FaLaptopMedical className="text-gray-500" size={25} />,
  },
  {
    title: "Department",
    to: "/department",

    icon: <FaNetworkWired className="text-gray-500" size={25} />,
  },
  {
    title: "Doctor",
    to: "/doctor",

    icon: <FaAmbulance className="text-gray-500" size={25} />,
  },
  {
    title: "Patient",
    to: "/patient",

    icon: <FaProcedures className="text-gray-500" size={25} />,
  },
  {
    title: "Nurse",
    to: "/nurse",

    icon: <FaUserNurse className="text-gray-500" size={25} />,
  },
  {
    title: "Pharmacist",
    to: "/pharmacist",

    icon: <FaHospitalUser className="text-gray-500" size={25} />,
  },
  {
    title: "Laboratorist",
    to: "/laboratory",

    icon: <FaRegUser className="text-gray-500" size={25} />,
  },
  {
    title: "Accountant",
    to: "/accountant",

    icon: <FaMoneyBillAlt className="text-gray-500" size={25} />,
  },
  {
    title: "Receptionist",
    to: "/reception",

    icon: <FaPortrait className="text-gray-500" size={25} />,
  },
];

export default sidenavs;
