import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">StudentApp</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav align-items-center">
                        {!token ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/student/register">Register Student</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/student/list">Student List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/student/update">Update Course</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/student/delete">Delete Student</Link>
                                </li>
                                <li className="nav-item ms-2">
                                    <button className="btn btn-sm btn-danger" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
