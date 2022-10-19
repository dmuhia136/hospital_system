import React, { useRef, useEffect, useState } from "react";
import AsideBar from "../components/AsideBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import druglist from "../constants/DrugList";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

function Pharmacist() {
  const searchRef = useRef(null);

  return (
    <div className="flex">
      {/* Aside bar */}
      <div className="w-2/12 only-mobile non-mobile">
        <AsideBar />
      </div>
      {/* Main dashbord */}
      <div className="w-10/12 p-4">
        <div className="flex place-content-center pt-10">
          <p className="text-3xl text-gray-600 font-semibold">Pharmacy</p>
        </div>

        <div className="flex place-content-center pt-5">
          <input
            ref={searchRef}
            className="input-button "
            placeholder="Search Medicine..."
          />
        </div>
        <div className="justify-end flex place-content-end pb-5 ">
          <button
            className="flex items-center gap-x-2 rounded-lg p-3 text-white font-semibold bg-blue-500"
          >
            <FaPlus /> Add New
          </button>
        </div>
        {/* table section */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name </TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Year Of Manufactory</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {druglist.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.brand}</TableCell>

                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.YOM}</TableCell>
                  <TableCell align="right">
                    <button className="bg-red-500 text-white rounded-lg p-1">
                      Delete
                    </button>{" "}
                    <></>
                    <button className="bg-blue-500 text-white rounded-lg p-1">
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Pharmacist;
