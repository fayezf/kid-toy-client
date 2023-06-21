import React from 'react';
import SubCategoryCard from '../../Shared/SubCategoryCard/SubCategoryCard';

const SubTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 ml-8'>
            {
                items.map(item => <SubCategoryCard
                    key={item._id}
                    item={item}
                ></SubCategoryCard>)
            }
        </div>
    );
};

export default SubTab;