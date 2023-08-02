import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`https://assignment-11-server-iota-one.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(result => setMyToys(result))
    }, [])

    const handleUpdateToy = id => {
        fetch(`https://assignment-11-server-iota-one.vercel.app/myToys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    const updated = myToys.find(myToy => myToy._id === id);
                    updated.status = 'confirm'
                    const newToys = [updated, ...remaining];
                    setMyToys(newToys);
                }
            })
    }

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`https://assignment-11-server-iota-one.vercel.app/myToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Deleted successfully',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        })
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }
    return (
        <div className='mt-4'>
            <h2 className='text-black font-semibold text-3xl text-center'>My Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table mt-4 w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                handleUpdateToy={handleUpdateToy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;