import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';

const AllToy = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className='mt-4'>
            <h2 className='text-orange-600 text-3xl text-center'>All Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table mt-4 w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category => <AllToysCard
                            key={category._id}
                            category={category}
                            ></AllToysCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToy;