import React from "react";
import axios from "axios";

async function fetchDoctor() {
  console.log("Fetching doctor");
  const response = await axios.get("http://192.168.0.102:4000/doctor");
  const products = response;
  return products;
}

export default  fetchDoctor;
