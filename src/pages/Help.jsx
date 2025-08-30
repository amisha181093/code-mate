// src/pages/HelpCenter.jsx
import React from "react";
import Header from "../Component/Header";
// import { Search, Mail, MessageCircle } from "lucide-react";

const Help = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white shadow rounded-2xl p-8">
                    {/* Title */}
                    <h1 className="text-2xl font-bold mb-2">Help Center</h1>
                    <p className="text-gray-600 mb-6">
                        Welcome to the CodeMate Help Center. Find answers to common questions
                        and learn how to make the most of our platform.
                    </p>

                    {/* Search Bar */}
                    <div className="relative mb-8">
                        < p Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
                        />
                    </div>

                    {/* Getting Started */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-1">How do I create an account?</h3>
                                <p className="text-gray-600">
                                    Click the "Sign Up" button on the login page and fill in your
                                    details. You’ll need to provide your name, email, and create a
                                    password.
                                </p>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-1">How do I complete my profile?</h3>
                                <p className="text-gray-600">
                                    After signing up, go to your profile page and click "Edit
                                    Profile". Add your skills, experience, and a profile picture to
                                    get better matches.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Finding Matches */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Finding Matches</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-1">
                                    How does the matching system work?
                                </h3>
                                <p className="text-gray-600">
                                    Our algorithm matches you with other developers based on your
                                    skills, interests, and project preferences. The more complete
                                    your profile, the better your matches will be.
                                </p>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-1">Can I filter my matches?</h3>
                                <p className="text-gray-600">
                                    Yes, you can filter matches by skills, location, experience
                                    level, and more. Use the filter options on the feed page to
                                    customize your results.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Communication */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Communication</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-1">
                                    How do I message other developers?
                                </h3>
                                <p className="text-gray-600">
                                    Once you’ve matched with someone, you can start a conversation
                                    by clicking the message icon on their profile or in your matches
                                    list.
                                </p>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-1">Is there a limit to messages?</h3>
                                <p className="text-gray-600">
                                    Free users can send up to 50 messages per day. Premium users
                                    have unlimited messaging capabilities.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Still Need Help */}
                    <section className="bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-xl p-6 shadow">
                        <h2 className="text-lg font-semibold mb-2">Still Need Help?</h2>
                        <p className="mb-4">
                            Our support team is here to help you with any questions or issues
                            you might have.
                        </p>
                        <div className="space-y-2">
                            <p className="flex items-center gap-2">
                                < p Mail className="w-5 h-5" /> support@codemate.com
                            </p>
                            <p className="flex items-center gap-2">
                                < p MessageCircle className="w-5 h-5" /> Live Chat Support (24/7)
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Help;
