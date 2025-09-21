import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [isEditing, setIsEditing] = useState('');
    const [editIndex, setEditIndex] = useState('');

    useEffect(() => {
        const userList = localStorage.getItem('users');
        if (userList) {
            setUsers(JSON.parse(userList));
        }
    }, []);

    // Add or Update user
    const handleSave = () => {
        let updatedUsers = [...users];

        if (isEditing) {
            // Update user
            updatedUsers[editIndex] = { name, email, gender };
        } else {
            // Add new user
            updatedUsers.push({ name, email, gender });
        }

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Reset form
        setName("");
        setEmail("");
        setGender("");
        setIsEditing(false);
        setEditIndex(null);
    };


    const onDelete = (user) => {
        const updatedUsers = users.filter((u) => u.email !== user.email);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };
    const onEdit = (user, index) => {
        setName(user.name);
        setEmail(user.email);
        setGender(user.gender);

        setIsEditing(true);
        setEditIndex(index);
    };
    const onAdd = () => {
        setName("");
        setEmail("");
        setGender("");
        setIsEditing(false);
        setEditIndex(null);

    };

    const isFormValid = name && email && gender;

    return (
        <div className="flex flex-row mt-4">
            <div className="flex-1">
                <h1 className="py-4 bg-blue-400 text-center mb-5 rounded-2xl w-[400px]">
                    Create User
                </h1>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Name"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96"
                />
                <br />
                <select
                    className="border-2 border-black rounded-lg p-2 m-2 w-96"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button
                    onClick={handleSave}
                    disabled={!isFormValid}
                    className={`p-2 m-2 w-96 rounded-lg 
            ${!isFormValid
                            ? "bg-gray-600 text-white cursor-not-allowed"
                            : "bg-blue-950 text-white"
                        }`}
                >
                    {isEditing ? "Update User" : "Create User"}
                    Create User
                </button>
            </div>
            {/* User List */}
            <div className="flex-1 ml-15">
                <h1 className="py-4 bg-blue-800 text-center mb-5 rounded-2xl w-[400px] mt-4">
                    Created User List
                </h1>

                {/* Add Button */}
                <div className="flex justify-end w-96 mb-4">
                    <button
                        onClick={onAdd}
                        className="text-white bg-green-600 hover:bg-green-700 p-2 rounded-full"
                    >
                        <FaPlus size={18} />
                    </button>
                </div>

                {users.map((item, index) => (
                    <div
                        key={index}
                        className="card bg-blue-200 w-96 shadow-sm rounded-3xl my-5 p-5 relative"
                    >
                        <div className="card-body space-y-1">
                            <p className="font-semibold">{item?.name}</p>
                            <p>{item?.gender}</p>
                            <p>{item?.email}</p>
                        </div>

                        {/* Edit & Delete Buttons */}
                        <div className="absolute top-3 right-3 flex space-x-3">
                            <button
                                onClick={() => onEdit(item, index)}
                                className="text-blue-700 hover:text-blue-900"
                            >
                                <FaEdit size={18} />
                            </button>
                            <button
                                onClick={() => onDelete(item)}
                                className="text-red-600 hover:text-red-800"
                            >
                                <FaTrash size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
