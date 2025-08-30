// src/pages/PrivacyPolicy.jsx
import React from "react";
import Header from "../Component/Header";

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white shadow rounded-2xl p-8">
                    {/* Title */}
                    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-600 mb-8">
                        At CodeMate, we take your privacy seriously. This Privacy Policy
                        explains how we collect, use, and protect your personal information.
                    </p>

                    {/* Information We Collect */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-2">Profile Information</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Name, email address, and profile picture</li>
                                    <li>Professional information (skills, experience, education)</li>
                                    <li>Location and timezone</li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-2">Usage Information</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Interaction with other users</li>
                                    <li>Messages and communications</li>
                                    <li>Platform activity and preferences</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">
                            How We Use Your Information
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-2">Platform Features</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Matching you with other developers</li>
                                    <li>Facilitating communication</li>
                                    <li>Personalizing your experience</li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4">
                                <h3 className="font-medium mb-2">Improving Our Service</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Analyzing usage patterns</li>
                                    <li>Enhancing platform features</li>
                                    <li>Ensuring platform security</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data Protection */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
                        <p className="text-gray-600">
                            We implement industry-standard security measures to protect your
                            personal information. This includes encryption, secure servers, and
                            regular security audits.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                        <div className="bg-gray-100 rounded-xl p-4">
                            <p className="text-gray-600 mb-2">You have the right to:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Access your personal information</li>
                                <li>Update or correct your data</li>
                                <li>Delete your account</li>
                                <li>Export your data</li>
                                <li>Opt-out of communications</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-600 mb-4">
                            If you have any questions about our Privacy Policy or how we handle
                            your data, please contact us at{" "}
                            <a
                                href="mailto:privacy@codemate.com"
                                className="text-pink-600 hover:underline"
                            >
                                privacy@codemate.com
                            </a>
                        </p>
                        <p className="text-sm text-gray-400">Last updated: March 2024</p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
