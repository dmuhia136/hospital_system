import React from "react";

function Login() {
  return (
    <div className="bg-gray-600 h-[950px]">
      <div className="bg-blue-400 grid place-items-center h-screen">
        <div className="rounded-lg p-3 w-[400px] bg-gray-200  divide-y space-y-7 divide-gray-300">
          <p className="flex place-content-center text-2xl font-bold">Login</p>
          <div className="pl-[50px] pt-3">
            <input className="input-auth" placeholder="Enter username" />
          </div>
          <div className="pl-[50px] pt-3">
            <input className="input-auth" placeholder="Enter password" />
          </div>
          <div className="pl-[150px] pt-3">
            <button className="bg-blue-600 p-3 w-[100px] text-lg shadow-lg rounded-lg text-white justify-center place-content-center items-center">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
