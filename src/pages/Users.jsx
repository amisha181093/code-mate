import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const userList = localStorage.getItem('users');
        if (userList) {
            setUsers(JSON.parse(userList));
        }
    }, []);

    const onDelete = () => {};
    const onEdit = () => {};
    const onAdd = () => {};

    const addUser = () => {
        console.log('Add User');
        const user = {
            name,
            email,
            gender,
        };

        const updatedUsers = [...users];
        updatedUsers.push(user);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setName('');
        setGender('');
        setEmail('');
    };

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
                    onClick={addUser}
                    className="bg-blue-950 text-white p-2 m-2 rounded-lg w-96"
                >
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
                                onClick={() => onEdit(item)}
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
