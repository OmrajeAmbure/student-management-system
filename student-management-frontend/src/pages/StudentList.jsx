import { useEffect, useState } from "react";
import API from "../api/axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Include token if API is protected
    API.get("/api/student/list", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card p-4 mt-4">
      <h2>Student List</h2>
      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Date of Joining</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.course}</td>
                  <td>{s.dateOfJoining}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
