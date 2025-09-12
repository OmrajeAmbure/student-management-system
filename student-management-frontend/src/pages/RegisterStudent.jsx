import React, { useState } from "react";
import api from "../api/axios";

function StudentRegister() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "",
        dateOfJoining: "", // dd-mm-yyyy
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateDate = (dateStr) => {
        // Regex: DD-MM-YYYY
        const regex = /^([0-2]\d|3[01])-(0\d|1[0-2])-\d{4}$/;
        return regex.test(dateStr);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateDate(formData.dateOfJoining)) {
            setMessage("Date must be in format dd-mm-yyyy");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const res = await api.post("/api/student/register", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMessage(res.data);
            setFormData({ name: "", email: "", course: "", dateOfJoining: "" });
        } catch (err) {
            console.error(err);
            setMessage("Failed to register student.");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Register Student</h2>
            {message && <div className="alert alert-info">{message}</div>}

            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input
                        type="text"
                        name="course"
                        className="form-control"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date of Joining (dd-mm-yyyy)</label>
                    <input
                        type="text"
                        name="dateOfJoining"
                        className="form-control"
                        placeholder="dd-mm-yyyy"
                        value={formData.dateOfJoining}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Register Student
                </button>
            </form>
        </div>
    );
}

export default StudentRegister;
