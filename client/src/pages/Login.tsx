// src/LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useLocation } from 'wouter';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [, setLocation] = useLocation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Check for admin credentials
        if (email === 'admin@xlnc.com' && password === 'admin123') {
            // Set admin token and redirect to admin dashboard
            login('admin-token', true);
            setLocation('/AdminDashboard');
            return;
        }

        try {
            // Regular user login flow
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
            if (response.ok) {
                login(data.token, data.isAdmin);
                setLocation(data.isAdmin ? '/AdminDashboard' : '/');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleRegisterClick = () => {
        window.location.href = '/register';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Sign In
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
