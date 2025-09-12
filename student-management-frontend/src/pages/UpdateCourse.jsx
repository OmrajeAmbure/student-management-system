import { useState } from "react";
import API from "../api/axios";

export default function UpdateCourse() {
    const [id, setId] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.put(`/api/student/update-course/${id}`, course, {
                headers: {
                    "Content-Type": "text/plain", // send as plain text
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            alert("Course updated!");
        } catch (err) {
            console.error(err.response?.data || err);
            alert("Failed to update course");
        }
    };

    return (
        <div className="card p-4 col-md-6 offset-md-3 mt-4">
            <h2>Update Student Course</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Student ID"
                    className="form-control mb-2"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="New Course"
                    className="form-control mb-2"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <button className="btn btn-warning w-100">Update</button>
            </form>
        </div>
    );
}
