import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleData = () => {
    const category = useLoaderData();
    const { _id, sellerName, toyName, subCategory, price, rating, pictureURL, availableQuantity } = category;
    return (
        <div className='mt-4'>
            <h2 className='text-3xl text-center text-red-600'>Single Toys Data</h2>
                <div className='flex items-center mt-8 gap-6'>
                    <img className='rounded-lg' style={{ width: '500px' }} src={pictureURL} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{toyName}</h2>
                        <p className='text-lg'>Seller: {sellerName}</p>
                        <p className='text-lg'>Sub-Category: {subCategory}</p>
                        <p className='text-lg'>Price: <span className='text-orange-500'>{price}</span></p>
                        <p className='text-lg'>Quantity: <span className='text-orange-500'>{availableQuantity}</span></p>

                    </div>
                </div>
        </div>
    );
};

export default SingleData;