import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import { Mail, Phone, MapPin, X, Heart } from "lucide-react";
import api from "../utils/api";

const Feed = () => {
  const [profileList, setProfileList] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null); // new variable for first profile
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetchProfiles ();
  },[]);

  const fetchProfiles = async () => {
        const response = await api.get("/connection/find");
        const {data}= response;
        const {users}= data;
        setProfileList(users);
    };

    const sendConnectionRequest = async () =>{
      const response = await api.post('/connection/send'
        
      );
      const {data} = response;
      console.log(data);
// update the current profile to the next profile
  // if (loading) {
  //   return <p className="text-center text-gray-500 mt-10">Loading profiles...</p>;
  // }
  // if (error) {
  //   return <p className="text-center text-red-500 mt-10">{error}</p>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />
      {/* Current Profile Highlight */}
      {currentProfile && (
        <div className="max-w-lg mx-auto my-6 p-4 bg-pink-50 rounded-xl shadow">
          <h2 className="text-xl font-bold text-pink-700">
            Highlighted Profile: {currentProfile.name}
          </h2>
          <p className="text-sm text-gray-600">{currentProfile.bio}</p>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {profileList.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Profile Image + Info */}
            <div className="relative">
              <img
                src={user.profilePic || ""}
                alt={user.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-semibold">
                  {user.name}, {user.age}
                </h2>
                <p className="text-sm">{user.gender}</p>
                <span className="mt-1 inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded-md">
                  {user.address?.split(",")[0]}
                </span>
              </div>
            </div>

            {/* About & Contact Info */}
            <div className="p-6 border-t">
              <h3 className="font-semibold text-lg mb-2">About</h3>
              <p className="text-gray-600 text-sm mb-4">
                {user.bio || "No bio available"}
              </p>

              <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  {user.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  {user.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  {user.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 hover:bg-red-200">
          <X className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200">
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Feed;
