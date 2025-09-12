import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        API.get("/student/list")
            .then((res) => setStudents(res.data))
            .catch((err) => console.error(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await API.delete(`/student/delete-student/${id}`);
            setStudents(students.filter((s) => s.id !== id));
        } catch (err) {
            alert("Not allowed or unauthorized");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Student List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Course</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.course}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(s.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
