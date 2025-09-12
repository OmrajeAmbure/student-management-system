import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Login({ setToken }) {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/api/auth/login", form);
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token); // update App state
            navigate("/student/list");
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="card p-4 col-md-6 offset-md-3 mt-4">
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    className="form-control mb-2"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control mb-2"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
}
