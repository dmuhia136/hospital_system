import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Department from "./pages/Department";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Nurse from "./pages/Nurse";
import Pharmacist from "./pages/Pharmacist";
import Laboratorist from "./pages/Laboratorist";
import Accountant from "./pages/Accountant";
import Receptionist from "./pages/Receptionist";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router><Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/pharmacist" element={<Pharmacist />} />
        <Route path="/laboratory" element={<Laboratorist />} />
        <Route path="/accountant" element={<Accountant />} />
        <Route path="/reception" element={<Receptionist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Router>


    </div>
  );
}

export default App;
