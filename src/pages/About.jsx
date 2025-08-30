import React from "react";
import Header from "../Component/Header";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* About Section */}
            <div className="container mx-auto px-6 py-10">
                <div className="bg-white rounded-2xl shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-4">About CodeMate</h2>
                    <p className="text-gray-600 mb-6">
                        CodeMate is a platform designed to connect developers and tech
                        professionals, making it easier to find collaboration opportunities,
                        share knowledge, and build meaningful professional relationships.
                    </p>

                    {/* Mission */}
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600 mb-6">
                        We believe in the power of collaboration and community in the tech
                        industry. Our mission is to create a space where developers can
                        connect, learn from each other, and build amazing things together.
                    </p>

                    {/* What We Offer */}
                    <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold">Developer Matching</h4>
                            <p className="text-gray-600 text-sm">
                                Find developers with complementary skills and interests for your
                                next project.
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold">Skill Sharing</h4>
                            <p className="text-gray-600 text-sm">
                                Learn from other developers and share your expertise with the
                                community.
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold">Project Collaboration</h4>
                            <p className="text-gray-600 text-sm">
                                Connect with developers to work on exciting projects together.
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold">Community Events</h4>
                            <p className="text-gray-600 text-sm">
                                Participate in virtual meetups, hackathons, and coding
                                challenges.
                            </p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                    <p className="text-gray-600 mb-6">
                        We're a team of passionate developers and tech enthusiasts who
                        understand the importance of community in the tech industry. Our
                        diverse backgrounds and experiences help us create a platform that
                        serves the needs of developers worldwide.
                    </p>

                    {/* CTA Button */}
                    <button className="px-5 py-2 rounded-md text-white font-medium bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
