// src/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    // Fixed credentials
    const ADMIN_EMAIL = 'admin@xlnc.com';
    const ADMIN_PASSWORD = 'admin123';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if credentials match
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Successful login
          window.location.href = ('/AdminDashboard');
        } else {
            // Invalid credentials
            alert('Invalid credentials. Please use the correct email and password.');
        }
    };

    const handleRegisterClick = () => {
        window.location.href = '/register';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Don't have an account?</p>
                    <button
                        onClick={handleRegisterClick}
                        className="mt-2 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
