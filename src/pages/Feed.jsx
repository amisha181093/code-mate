import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Component/Header'

const userData = {
  name: 'Janvi Kapoor',
  age:32,
  about: 'i am new about',
  email: 'a@a.com',
  phone: '9891154187',
  profilePic: 'https://rmkv.com/cdn/shop/articles/janhvi_new_saree_1100x.jpg?v=1726657104'
}

const Feed = ({profileId}) => {
  const [profileList, setProfileList] = useState([]); 
  
  useEffect(()=>{
    // make an api call to recieve list and after recieving data put it in the variable
    const data = []; 

    setProfileList(data);
  }, [])


  return (
    <div>
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header /> 

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={userData?.profilePic}
              alt="Profile"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-semibold">{userData?.name}, {userData?.age}</h2>
              <p className="text-sm">male</p>
              <span className="mt-1 inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded-md">
                Vasundhara
              </span>
            </div>
          </div>

          {/* About & Contact Info */}
          <div className="p-6 border-t">
            <h3 className="font-semibold text-lg mb-2">About</h3>
            <p className="text-gray-600 text-sm mb-4">I am a default user bio.</p>

            <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <p Mail className="w-4 h-4 text-gray-500 font-bold" />
                nitin.gadkari@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <p Phone className="w-4 h-4 text-gray-500 font-bold" />
                1223232225
              </p>
              <p className="flex items-center gap-2">
                < p MapPin className="w-4 h-4 text-gray-500" />
                Vasundhara, Ghaziabad, Uttar Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">About</h3>
          <p className="text-gray-600 text-sm mb-6">I am a default user bio.</p>

          <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
          <div className="space-y-3 mb-6">
            <div className="p-3 rounded-lg bg-gray-50"> 
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-700">nitin.gadkari@gmail.com</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-gray-700">1223232225</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50">
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-gray-700">Vasundhara, Ghaziabad, Uttar Pradesh</p>
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-2">Account Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-700">Member Since</p>
              <p className="text-gray-900">26/05/2025</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Last Updated</p>
              <p className="text-gray-900">26/05/2025</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Account Status</p>
              <p className="text-green-600 font-medium">Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500 hover:bg-red-200">
          < p X className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200">
          < p Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Feed

