import { useState } from "react";
import API from "../api/axios";

export default function DeleteStudent() {
    const [id, setId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.delete(`/api/student/delete-student/${id}`);
            alert("Student deleted!");
        } catch (err) {
            console.error(err.response?.data || err);
            alert("Failed to delete student");
        }
    };

    return (
        <div className="card p-4 col-md-6 offset-md-3 mt-4">
            <h2>Delete Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Student ID"
                    className="form-control mb-2"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button className="btn btn-danger w-100">Delete</button>
            </form>
        </div>
    );
}
