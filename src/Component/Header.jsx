import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
            <h1 className="text-2xl font-bold text-pink-500">CodeMate</h1>
            <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
                <NavLink to='/feed' className="hover:text-pink-500">Feed</NavLink>
                <NavLink to='/chat' className="hover:text-pink-500">Chat</NavLink>
                <NavLink to='/connection' className="hover:text-pink-500">Connections</NavLink>
                <NavLink to='/profile' className="hover:text-pink-500">Profile</NavLink>
                <NavLink to='/about' className="hover:text-pink-500">About</NavLink>
                <NavLink to='/privacy' className="hover:text-pink-500">Privacy</NavLink>
                <NavLink to='/help' className="hover:text-pink-500">Help</NavLink>
                <button onClick={handleLogout} className="px-4 py-1 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-50">
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Header
