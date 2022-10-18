import React from "react";
import {
  FaRegUser,
  FaGlobeAmericas,
  FaSignOutAlt,
  FaRegArrowAltCircleRight,
  FaAmbulance,
  FaProcedures,
  FaUserNurse,
  FaHospitalUser,
  FaMoneyBillAlt,
  FaClipboardList,
  FaBriefcaseMedical,
  FaBaby,
  FaPeace,
  FaBookDead,
} from "react-icons/fa";
import Services from "./Services";

function Dashboard() {
  return (
    <div className=" divide-y space-y-7 divide-gray-700 ">
      <div className="pt-10">
        <p className="flex justify-center items-center text-2xl font-semibold text-gray-600">
          Hospital Management System
        </p>
        <div className="justify-between flex p-4 text-gray-600">
          <p className="flex items-center gap-x-3">
            <FaRegUser /> admin
          </p>
          <div className="flex gap-x-5">
            <p className="flex items-center gap-x-2">
              <FaGlobeAmericas /> Website
            </p>
            <p className="flex items-center gap-x-2">
              Logout <FaSignOutAlt />
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="flex items-center gap-x-4">
            <FaRegArrowAltCircleRight /> Admin Dashboard
          </p>
        </div>
        {/* all services */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 gap-y-5 pl-2 pr-10 pt-10">
          <Services
            count={0}
            job="Doctor"
            color="text-gray-500"
            icon={<FaAmbulance className="text-gray-300" size={120} />}
          />
          <Services
            count={0}
            job="Patient"
            color="text-red-500"
            icon={<FaProcedures className="text-gray-300" size={120} />}
          />
          <Services
            count={0}
            job="Nurse"
            color="text-blue-500"
            icon={<FaUserNurse className="text-gray-300" size={120} />}
          />
          <Services
            count={10}
            job="Pharmacist"
            color="text-blue-800"
            icon={<FaHospitalUser className="text-gray-300" size={120} />}
          />
          <Services
            count={0}
            job="Laboratorist"
            color="text-green-500"
            icon={<FaRegUser className="text-gray-300" size={120} />}
          />
          <Services
            count={0}
            job="Accountant"
            color="text-purple-500"
            icon={<FaMoneyBillAlt className="text-gray-300" size={120} />}
          />
          <Services
            count={0}
            job="Payment"
            color="text-purple-500"
            icon={<FaClipboardList className="text-gray-300" size={120} />}
          />
          <Services
            count={0}
            job="Medicine"
            color="text-yellow-500"
            icon={<FaBriefcaseMedical className="text-gray-300" size={120} />}
          />
          <Services
            job="Operations Reports"
            color="text-yellow-500"
            icon={<FaPeace className="text-gray-300" size={120} />}
          />
          <Services
            job="Birth Reports"
            color="text-yellow-500"
            icon={<FaBaby className="text-gray-300" size={120} />}
          />
          <Services
            job="Death Reports"
            color="text-yellow-500"
            icon={<FaBookDead className="text-gray-300" size={120} />}
          />
        </div>
      </div>
      <div className="pt-10"></div>
    </div>
  );
}

export default Dashboard;
