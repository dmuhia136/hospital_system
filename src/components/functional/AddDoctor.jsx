import React from "react";

function AddDoctor() {
  return (
    <div>
      <div className="absolute z-60">
        <form className="grid">
          <label>Name</label>
          <input type="text" placeholder="Enter doctor name" />
          <label>Department</label>
          <input type="text" placeholder="Enter Deparment" />
          <label>Contact</label>
          <input type="text" placeholder="Enter Contact info" />
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;
