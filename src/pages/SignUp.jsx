import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(false); // toggle between login/signup
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            navigate('/feed');
        }
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        phoneNumber: "",
        address: "",
        gender: "",
        email: "",
        password: "",
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        if (isLogin) {
            console.log("Login Data:", {
                email: formData.email,
                password: formData.password,
            });
        } else {
            console.log("Signup Data:", formData);
        }
        try {
            if (isLogin) {
                /*LOGIN API CALl*/
                const { data } = await api.post("/auth/login", {
                    email: formData.email,
                    password: formData.password,
                });
                // setSuccess("Login successful!");
                // console.log("Login response:", data);

                // ✅ Save token for future requests
                localStorage.setItem("user", JSON.stringify(data.data));
                navigate('/feed');
            } else {
                /* SIGNUP API CALL*/
                formData.age = parseInt(formData.age);
                const { data } = await api.post("/auth/register", formData);
                setSuccess("Signup successful! Please login.");
                localStorage.setItem('user', JSON.stringify(data.data));
                // console.log("Signup response:", data);
                navigate('/feed');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-orange-400">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-red-500">CodeMate</h1>
                <p className="text-gray-500 text-center mb-6">
                    {isLogin ? "Login to your account" : "Create your account"}
                </p>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            {/* First & Last Name */}
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            {/* Age */}
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Age"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" name="address" value={formData.address} onChange={handleChange}>
                            </textarea>

                            {/* Gender */}
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </>
                    )}

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={
                            loading ||
                            (isLogin
                                ? !formData.email || !formData.password
                                : !formData.firstName ||
                                !formData.lastName ||
                                !formData.age ||
                                !formData.phoneNumber ||
                                !formData.address ||
                                !formData.gender ||
                                !formData.email ||
                                !formData.password)
                        } className="cursor-pointer w-full py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-60 disabled:bg-none disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                {/* Toggle */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        disabled={!formData.email || !formData.password}
                        className="text-pink-500 font-medium cursor-pointer hover:underline disabled:cursor-not-allowed"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;

