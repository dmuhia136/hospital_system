import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  var data = {
    email: email,
    password: password,
  };
  const auth = useAuth();
  async function login(e) {
    e.preventDefault();
    try {
      var user = await axios.post(
        "http://192.168.0.102:4000/admin/login",
        data
      );
      console.log(user.data.body.username);
      auth.login(user.data.body.name);
      navigate("/");
    } catch (error) {
      setError("Password or email did not match");
    }
  }
  return (
    <div className="bg-gray-600 h-[950px]">
      <div className="bg-blue-400 grid place-items-center h-screen">
        <div className="rounded-lg p-3 w-[400px] bg-gray-200  divide-y space-y-7 divide-gray-300">
          <p className="flex place-content-center text-2xl font-bold">Login</p>
          <div className="pl-[50px] pt-3">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-auth"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="pl-[50px] pt-3">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-auth"
              placeholder="Enter password"
              required
            />
          </div>
          <p className="text-sm text-red-600 justify-center place-content-center items-center flex">
            {error}
          </p>
          <div className="pl-[150px] pt-3">
            <button onClick={login} className="login-button">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
