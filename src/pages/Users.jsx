
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [pincode, setPincode] = useState('');
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [place, setPlace] = useState('');
    const [country, setCountry] = useState('');


    useEffect(() => {
        const userList = localStorage.getItem('users');
        if (userList) {
            setUsers(JSON.parse(userList));
        }
    }, []);

    const addUser = () => {
        console.log('Add User');
        const user = {
            firstName,
            lastName,
            gender,
            address: {
                city: {
                    pincode: pincode,
                    name: name,
                    area: area,
                },
                landmark: {
                    nearby: {
                        place: place,
                    },
                },
                country: country,
            },
        }



        const updatedUsers = [...users];
        updatedUsers.push(user);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setFirstName('');
        setLastName('');
        setGender('');
        setPincode('');
        setName('');
        setArea('');
        setPlace('');
        setCountry('');
    };

    return (
        <div className="flex flex-row mt-4">
            <div className="flex-1">
                <h1 className="py-4 bg-blue-400 text-center mb-5 rounded-2xl w-[400px]">Create User</h1>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="First Name"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96" />
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96" />
                <br />
                <select
                    className="border-2 border-black rounded-lg p-2 m-2 w-96"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    type="text"
                    placeholder="pincode Name"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96" />
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder=" Area"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96" />
                <input
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    type="text"
                    placeholder="Town "
                    className="border-2 border-black rounded-lg p-2 m-2 w-96" />
                <input
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    type="text"
                    placeholder="State"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96" />
                <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    placeholder="Country "
                    className="border-2 border-black rounded-lg p-2 m-2 w-96" />
                <button
                    onClick={addUser}
                    className="bg-blue-950 text-white p-2 m-2 rounded-lg w-96">
                    Create User
                </button>
            </div>
            {/* User List */}
            <div className="flex-1 ml-15">
                <h1 className="py-4 bg-blue-800 text-center mb-5 rounded-2xl w-[400px] mt-4">Created User List</h1>
                {users.map((item, index) => (
                    <div
                        key={index}
                        className="card bg-blue-200 w-96 shadow-sm rounded-3xl my-5 p-5"
                    >
                        <div className="card-body">
                            <p>
                                {item?.firstName} , {item?.lastName}
                            </p>
                            <p>{item?.gender}</p>
                            <p>
                                {item?.address.city.name} {item?.address.city.pincode}{' '}
                                {item?.address.city.area}
                            </p>
                            <p>{item?.address.landmark.nearby.place}</p>
                            <p>{item?.address.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Users;

