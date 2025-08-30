import React from "react";
import Header from "../Component/Header";
// import { Mail, Phone, MapPin } from "lucide-react"; // for icons

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Profile Layout */}
            <div className="container mx-auto px-6 py-10 grid lg:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Header */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="h-28 bg-gradient-to-r from-pink-500 to-orange-400"></div>
                        <div className="p-6 relative">
                            {/* Avatar */}
                            <div className="absolute -top-12 left-6">
                                <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center text-4xl">
                                    👤
                                </div>
                            </div>
                            {/* Info */}
                            <div className="ml-32">
                                <h2 className="text-xl font-bold">Kajol Kumari, 35</h2>
                                <p className="text-gray-600">male</p>
                                <p className="text-gray-600">
                                    Vasundhara, Ghaziabad, Uttar Pradesh
                                </p>
                                <p className="text-gray-500 mt-2">I am a default user bio.</p>
                            </div>
                            {/* Edit Button */}
                            <button className="absolute top-4 right-4 px-4 py-1 border border-pink-500 text-pink-500 rounded-md text-sm hover:bg-pink-50">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                        <div className="space-y-3 text-gray-700">
                            <p className="flex items-center gap-2">
                                < p Mail size={18} /> kajol.kumari@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                < p Phone size={18} /> 0253247200
                            </p>
                            <p className="flex items-center gap-2">
                                < p MapPin size={18} /> Vasundhara, Ghaziabad, Uttar Pradesh
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="space-y-6">
                    {/* Account Information */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-4">Account Information</h3>
                        <p className="flex justify-between text-sm mb-2">
                            <span>Member Since</span> <span className="font-bold">30/05/2025</span>
                        </p>
                        <p className="flex justify-between text-sm mb-2">
                            <span>Last Updated</span> <span className="font-bold">30/05/2025</span>
                        </p>
                        <p className="flex justify-between text-sm">
                            <span>Account Status</span>{" "}
                            <span className="text-green-600 font-bold">Active</span>
                        </p>
                    </div>

                    {/* Settings */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-4">Settings</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="hover:text-pink-500 cursor-pointer">Account Settings</li>
                            <li className="hover:text-pink-500 cursor-pointer">Notification Preferences</li>
                            <li className="hover:text-pink-500 cursor-pointer">Privacy Settings</li>
                            <li className="hover:text-pink-500 cursor-pointer">Subscription</li>
                        </ul>
                    </div>

                    {/* Upgrade to Premium */}
                    <div className="rounded-2xl shadow-md p-6 text-white bg-gradient-to-r from-pink-500 to-orange-400">
                        <h3 className="font-semibold text-lg mb-2">Upgrade to Premium</h3>
                        <p className="text-sm mb-4">
                            Get unlimited matches, advanced filters, and more!
                        </p>
                        <button className="w-full py-2 rounded-md bg-white text-pink-600 font-semibold hover:bg-gray-100">
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
