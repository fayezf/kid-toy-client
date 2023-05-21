import React from 'react';

const MyToysRow = ({ myToy, handleUpdateToy, handleDelete}) => {
    const { _id, toyName, price, availableQuantity, detailDescription, status } = myToy;
    return (
        <tr>
            <td>
                {toyName}
            </td>
            <td>${price}</td>
            <td>${availableQuantity}</td>
            <td>{detailDescription}</td>
            <th>
                {status === 'confirm' ? <span className='font-bold text-primary'>Confirmed</span>:
                    <button onClick={() => handleUpdateToy(_id)} className="btn bg-green-400 text-white font-semibold btn-xs">Update</button>
                    }
            </th>
            <th>
                {
                    <button onClick={() => handleDelete(_id)}  className="btn bg-orange-400 text-white font-semibold btn-xs">Delete</button>
                    }
            </th>
        </tr>
    );
};

export default MyToysRow;