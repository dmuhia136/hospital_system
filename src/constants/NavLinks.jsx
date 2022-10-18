import React from 'react'
import { FaLaptopMedical } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaProcedures } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaPortrait } from "react-icons/fa";

var sidenavs=[
    {
        'title':"Dashboard",
        'icon': <FaLaptopMedical className="text-gray-500" size={25} />
    },
    {
        'title':"Department",
        'icon': <FaNetworkWired className="text-gray-500" size={25} />
    },
    {
        'title':"Doctor",
        'icon': <FaAmbulance className="text-gray-500" size={25} />
    },
    {
        'title':"Patient",
        'icon': <FaProcedures className="text-gray-500" size={25} />
    },
    {
        'title':"Nurse",
        'icon': <FaUserNurse className="text-gray-500" size={25} />
    },
    {
        'title':"Pharmacist",
        'icon': <FaHospitalUser className="text-gray-500" size={25} />
    },
    {
        'title':"Laboratorist",
        'icon': <FaRegUser className="text-gray-500" size={25} />
    },
    {
        'title':"Accountant",
        'icon': <FaMoneyBillAlt className="text-gray-500" size={25} />
    },
    {
        'title':"Receptionist",
        'icon': <FaPortrait className="text-gray-500" size={25} />
    },
]

export default sidenavs;