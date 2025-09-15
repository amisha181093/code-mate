import React, { useEffect } from 'react';

const userList = [
    {
        firstName: 'Amisha',
        lastName: 'Kumari',
        gender: 'female',
        address: {
            city: {
                pincode: 201301,
                name: 'Ghaziabad',
                area: 'Vasundhara',
            },
            landmark: {
                nearby: {
                    place: 'Amity International School',
                },
            },
            country: 'India',
        },
    },
    {
        firstName: 'Abhishek',
        lastName: 'Kumar',
        gender: 'male',
        address: {
            city: {
                pincode: 211311,
                name: 'Jakarta',
                area: 'Vasundhara - In',
            },
            landmark: {
                nearby: {
                    place: 'Amity International School - In',
                },
            },
            country: 'Indonesia',
        },
    },
];

const Users = () => {
    const [users, setUsers] = React.useState(userList);
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(userList));
    }, []);

    const addUser = () => {
        console.log('Add User');
        const user = {
            firstName: 'Abhishek',
            lastName: 'Kumar',
            gender: 'male',
            address: {
                city: {
                    pincode: 211311,
                    name: 'Jakarta',
                    area: 'Vasundhara - In',
                },
                landmark: {
                    nearby: {
                        place: 'Amity International School - In',
                    },
                },
                country: 'Indonesia',
            },
        };
        users.push(user);
        setUsers([...users]);
        localStorage.setItem('users', JSON.stringify(users));
    };

    return (
        <div className="flex flex-row">
            <div className="flex-1">
                <h1 className="py-4 bg-gray-500 text-center mb-5">Create User</h1>
                <input
                    type="text"
                    placeholder="First Name"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="border-2 border-black rounded-lg p-2 m-2 w-96"
                />
                <br />
                <select className="border-2 border-black rounded-lg p-2 m-2 w-96">
                    <option value="">Select Gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                </select>
                <button
                    onClick={addUser}
                    className="bg-blue-500 text-white p-2 m-2 rounded-lg w-96"
                >
                    Create User
                </button>
            </div>
            <div className="flex-1">
                <h1 className="py-4 bg-orange-500 text-center mb-5">Created User List</h1>
                {users.map((item, index) => (
                    <div key={index} class="card bg-amber-200 w-96 shadow-sm rounded-3xl my-5 p-5">
                        <div class="card-body">
                            <div>
                                <p>
                                    {item?.firstName} , {item?.lastName}
                                </p>
                            </div>
                            <p>{item?.gender}</p>
                            <p>
                                {item?.address.city.name}
                                {item?.address.city.pincode}
                                {item?.address.city.area}
                            </p>
                            <p>{item?.address.landmark.nearby.place}</p>
                            <p>{item?.address.country}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <h1 className="py-10 bg-amber-500 text-center mb-5">User List</h1> */}
        </div>
    );
};

export default Users;
