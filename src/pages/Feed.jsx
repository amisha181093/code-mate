import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { Mail, Phone, MapPin, X, Heart } from 'lucide-react';
import api from '../utils/api';

const Feed = () => {
    const [profileList, setProfileList] = useState([]);
    const [currentProfile, setCurrentProfile] = useState(null); // new variable for first profile
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        const response = await api.get('/connection/find');
        const { data } = response;
        const { users } = data;
        setProfileList(users);
    };

    const sendConnectionRequest = async () => {
        const response = await api.post('/connection/send');
        const { data } = response;
        console.log(data);
        // update the current profile to the next profile
        // if (loading) {
        //   return <p className="text-center text-gray-500 mt-10">Loading profiles...</p>;
        // }
        // if (error) {
        //   return <p className="text-center text-red-500 mt-10">{error}</p>;
    };

    return (
        <>
            <Header />
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Left Profile Card */}
                    <div className="bg-white rounded-2xl shadow p-0 overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/600x300"
                                alt="Profile Cover"
                                className="w-full h-60 object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <h2 className="text-xl font-semibold text-white">
                                    Nitin Gadkari, 46
                                </h2>
                                <p className="text-sm text-gray-200">male</p>
                                <span className="inline-block bg-pink-700 text-white text-xs px-2 py-1 rounded mt-2">
                                    Vasundhara
                                </span>
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">About</h3>
                            <p className="text-gray-600 text-sm mb-4">I am a default user bio.</p>

                            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="text-gray-500" />
                                    <span>nitin.gadkari@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={16} className="text-gray-500" />
                                    <span>1223232225</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-gray-500" />
                                    <span>Vasundhara, Ghaziabad, Uttar Pradesh</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Info Card */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-lg font-semibold mb-2">About</h3>
                        <p className="text-gray-600 text-sm mb-6">I am a default user bio.</p>

                        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                        <div className="space-y-3 mb-6">
                            <div className="p-3 rounded-lg bg-gray-100 text-sm">
                                <span className="block font-medium">Email</span>
                                nitin.gadkari@gmail.com
                            </div>
                            <div className="p-3 rounded-lg bg-gray-100 text-sm">
                                <span className="block font-medium">Phone</span>
                                1223232225
                            </div>
                            <div className="p-3 rounded-lg bg-gray-100 text-sm">
                                <span className="block font-medium">Address</span>
                                Vasundhara, Ghaziabad, Uttar Pradesh
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-2">Account Information</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Member Since</span>
                                <span>26/05/2025</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Last Updated</span>
                                <span>26/05/2025</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Account Status</span>
                                <span className="text-green-600 font-semibold">Active</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-center gap-6 mt-8">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 hover:bg-red-200 shadow">
                        ✕
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 hover:bg-green-200 shadow">
                        ❤
                    </button>
                </div>
            </div>
        </>
    );
};

export default Feed;
