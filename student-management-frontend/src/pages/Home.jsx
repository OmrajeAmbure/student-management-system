import { useState } from "react";

export default function Home() {
    return (
        <div className="bg-light text-dark min-vh-100">

            {/* Header */}
            <header className="text-center py-5">
                <h1>Welcome to Student Management System</h1>
                <p className="lead">Manage students, courses, and more with ease.</p>
            </header>

            {/* Info cards */}
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow bg-white">
                            <div className="card-body">
                                <h5 className="card-title">Register Students</h5>
                                <p className="card-text">Quickly add new students to your system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow bg-white">
                            <div className="card-body">
                                <h5 className="card-title">Manage Courses</h5>
                                <p className="card-text">Update or assign courses for your students easily.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow bg-white">
                            <div className="card-body">
                                <h5 className="card-title">Student List</h5>
                                <p className="card-text">View, edit, or delete students with a simple interface.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-3 text-center bg-light text-dark">
                © {new Date().getFullYear()} Student Management System
            </footer>
        </div>
    );
}
