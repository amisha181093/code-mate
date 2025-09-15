import React, { useEffect } from 'react'

const userList = [
    // {
    //     firstName: 'Amisha',
    //     lastName: 'Kumari',
    //     gender: 'female',
    //     address: {
    //         city: {
    //             pincode: 201301,
    //             name: 'Ghaziabad',
    //             area: 'Vasundhara'
    //         },
    //         landmark: {
    //             nearby: {
    //                 place: 'Amity International School',
    //             }
    //         },
    //         country: 'India',
    //     },
    // },
    // {
    //     firstName: 'Abhishek',
    //     lastName: 'Kumar',
    //     gender: 'male',
    //     address: {
    //         city: {
    //             pincode: 211311,
    //             name: 'Jakarta',
    //             area: 'Vasundhara - In'
    //         },
    //         landmark: {
    //             nearby: {
    //                 place: 'Amity International School - In',
    //             }
    //         },
    //         country: 'Indonesia',
    //     },
    // }
]

const Users = () => {

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(userList));
    }, []);

    return (
        <div>
            <h1 className='py-10 bg-amber-500 text-center mb-5'>User List</h1>
            {
                userList.map((item, index) => (
                    <div key={index} class="card bg-amber-200 w-96 shadow-sm rounded-3xl my-5 p-5">
                        <div class="card-body">
                            <div>
                                <p>
                                    {item?.firstName} , {item?.lastName}
                                </p>
                            </div>
                            <p>
                                {item?.gender}
                            </p>
                            <p>
                                {item?.address.city.name}
                                {item?.address.city.pincode}
                                {item?.address.city.area}
                            </p>
                            <p>
                                {item?.address.landmark.nearby.place}
                            </p>
                            <p>
                                {item?.address.country}
                            </p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Users
