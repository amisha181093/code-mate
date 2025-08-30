import React from "react";
import Header from "../Component/Header";

export default function Connection() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Main Section */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-xl font-bold mb-4">Connection Requests</h2>
                <div className="border-t" />

                {/* Request Card */}
                <div className="mt-4 bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
                    {/* Left Profile Info */}
                    <div className="flex items-center space-x-4">
                        <img
                            src=""
                            alt="profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-semibold">Nitin Gadkari</h3>
                            <p className="text-gray-500 text-sm">I am a default user bio.</p>
                            <div className="flex gap-2 mt-1">
                                <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                                    46 years old
                                </span>
                                <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                                    male
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <button className="px-4 py-1 text-sm font-medium text-white rounded-md bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90">
                            Accept
                        </button>
                        <button className="px-4 py-1 text-sm font-medium border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
