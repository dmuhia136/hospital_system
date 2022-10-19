import React from "react";
import {
  FaPortrait,
  FaSignOutAlt,
  FaMoneyBillAlt,
  FaRegUser,
  FaHospitalUser,
  FaUserNurse,
  FaProcedures,
  FaAmbulance,
  FaNetworkWired,
  FaLaptopMedical,
} from "react-icons/fa";

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
  {
    title: "Logout",
    to: "/reception",

    icon: <FaSignOutAlt className="text-gray-500" size={25} />,
  },
];

export default sidenavs;
