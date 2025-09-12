import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentRegister from "./pages/RegisterStudent";
import StudentList from "./pages/StudentList";
import UpdateCourse from "./pages/UpdateCourse";
import DeleteStudent from "./pages/DeleteStudent";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  // Token state
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      {/* Navbar always visible */}
      <Navbar token={token} setToken={setToken} />

      <div className="">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          {token ? (
            <>
              <Route path="/student/register" element={<StudentRegister />} />
              <Route path="/student/list" element={<StudentList />} />
              <Route path="/student/update" element={<UpdateCourse />} />
              <Route path="/student/delete" element={<DeleteStudent />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
