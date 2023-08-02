import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';

const SingleData = () => {
    const category = useLoaderData();
    const { _id, sellerName, toyName, subCategory, sellerEmail, price, detailDescription, rating, pictureURL, availableQuantity } = category;
    return (
        <div className='mt-4'>
            <h2 className='text-3xl text-center font-semibold text-black'>Single Toys Data</h2>
            <div className='flex items-center mt-8 gap-6'>
                <img className='rounded-lg' style={{ width: '500px' }} src={pictureURL} alt="" />
                <div>
                    <h2 className='text-2xl font-bold'>{toyName}</h2>
                    <p className='text-lg'>{detailDescription}</p>
                    <p className='text-lg'><span className='font-semibold'>Seller:</span> {sellerName}</p>
                    <p className='text-lg'><span className='font-semibold'>Email:</span> {sellerEmail}</p>
                    <p className='text-lg'><span className='font-semibold'>Sub-Category:</span> {subCategory}</p>
                    <p className='text-lg'><span className='font-semibold'>Price:</span> <span className='text-orange-500'>{price}</span></p>
                    <p className='text-lg'><span className='font-semibold'>Quantity:</span> <span className='text-orange-500'>{availableQuantity}</span></p>
                    <div>
                            <Rating
                                placeholderRating={Math.round(rating || 0)}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar />}
                            ></Rating>
                            <span className='text-yellow-500'>{rating}</span>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default SingleData;