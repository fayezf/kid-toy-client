import React from 'react';
import SubCategoryCard from '../../Shared/SubCategoryCard/SubCategoryCard';

const SubTab = ({ items }) => {
    return (
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    items.map(item => <SubCategoryCard
                        key={item._id}
                        item={item}
                    ></SubCategoryCard>)
                }
            </div>
        </div>

    );
};

export default SubTab;