import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({ category }) => {
    const { _id, sellerName, toyName, subCategory, price, availableQuantity } = category;
    return (
        <tr>
            <td>
                {sellerName}
            </td>
            <td>
                {toyName}
            </td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>${availableQuantity}</td>
            <th>
                <Link to={`/singleData/${_id}`}>
                    <button className="btn btn-primary font-semibold btn-xs">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysCard;