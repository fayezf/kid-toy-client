import React from 'react';
import { Link } from 'react-router-dom';

const SubCategoryCard = ({ item }) => {
    const { _id, toyName, pictureURL, price, rating } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={pictureURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: {price}</p>
                <p>Ratings: {rating}</p>
                <div className="card-actions">
                    <Link to={`/singleData/${_id}`}>
                        <button className="btn btn-accent font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;