import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./Modal.css";

function AddDoctor() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");

  var doctorData = {
    name: name,
    role: role,
    gender: gender,
    contact: contact,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var response=await axios.post("http://192.168.0.102:4000/doctor",doctorData)
    console.log(response);
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal bg-green-500 rounded-lg text-white"
      >
        Add New
      </button>

      {modal && (
        <div className="modal z-50">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="pt-7" />
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="input-auth"
                placeholder="John Doe"
              />
              <label htmlFor="role">Role</label>
              <input
                onChange={(e) => setRole(e.target.value)}
                id="role"
                className="input-auth"
                placeholder="Doctor"
              />
              <label htmlFor="gender">Gender</label>
              <input
                id="gender"
                onChange={(e) => setGender(e.target.value)}
                className="input-auth"
                placeholder="Male/Female"
              />
              <label htmlFor="contact">Contact</label>
              <input
                onChange={(e) => setContact(e.target.value)}
                id="contact"
                className="input-auth"
                placeholder="How we can react you"
              />
              <div className="pt-4" />
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-lg text-white"
              >
                Create doctor
              </button>
            </form>
            <button
              className="close-modal bg-red-500 text-white rounded-lg"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddDoctor;
