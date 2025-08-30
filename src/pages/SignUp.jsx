import React from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-orange-400">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-center text-red-500">CodeMate</h1>
                    <p className="text-gray-500 text-center mb-6">Create your account</p>

                    {/* Form */}
                    <form className="space-y-4">
                        {/* First & Last Name */}
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        {/* Age */}
                        <input
                            type="number"
                            placeholder="Age"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />

                        {/* Gender */}
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Already have an account */}
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to='/feed' className="text-pink-500 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp
