import React from 'react'
import AsideBar from "../components/AsideBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaPlus } from "react-icons/fa";
import AddDoctor from "../components/functional/AddDoctor";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("John Doe", "Dentist", "jonhn@gmail.com", false),
  createData("Alice Wonder", "Onchology", "Alice@gmail.com", true),
  createData("John Snow", "General Doctor", "snow@gmail.com", true),
  createData("Alison Baker", "Surgeon", "alison@gmail.com", false),
  createData("Matthew Macchanhey", "General Doctor", "matthew@gmail.com", true),
];

function Patient() {
  return (
    <div className="flex">
      {/* Aside bar */}
      <div className="w-2/12 only-mobile non-mobile">
        <AsideBar />
      </div>
      {/* Main body */}
      <div className="w-10/12 pt-10 pr-10 relative">
        <p className="text-xl font-semibold text-gray-700 pb-10 justify-center place-content-center flex place-items-center">
          List of Patients
        </p>
        <div className="justify-end flex place-content-end pb-5">
          <button
            className="flex items-center gap-x-2 rounded-lg p-3 text-white font-semibold bg-blue-500"
          >
            <FaPlus /> Add New
          </button>
        </div>
      
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name </TableCell>
                <TableCell align="right">Reason</TableCell>
                <TableCell align="right">Admitted</TableCell>
                <TableCell align="right">Contact</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>

                  <TableCell align="right">
                    {row.carbs ? (
                      <span className="rounded-lg bg-green-500 text-white p-1">
                        true
                      </span>
                    ) : (
                      <span className="rounded-lg bg-red-500 text-white p-1">
                      false
                      </span>
                    )}
                  </TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
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
  )
}

export default Patient