import React from 'react';
import pcl1 from '../../../assets/gallery/pcl1.jpg'
import pcl2 from '../../../assets/gallery/pcl2.jpg'
import pcl3 from '../../../assets/gallery/pcl3.jpg'
import pcl4 from '../../../assets/gallery/pcl4.jpg'
import pcl5 from '../../../assets/gallery/pcl5.jpg'
import pcl6 from '../../../assets/gallery/pcl6.jpg'

const Gallery = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-center text-3xl text-green-800'>Our popular figure</h2>
            <div className='grid grid-cols-1 p-5 md:grid-cols-2 gap-6 w-3/4 ml-36 mt-4'>
                <img className='rounded-lg' src={pcl1} alt="" />
                <img className='rounded-lg' src={pcl2} alt="" />
                <img className='rounded-lg' src={pcl3} alt="" />
                <img className='rounded-lg' src={pcl4} alt="" />
                <img className='rounded-lg' src={pcl5} alt="" />
                <img className='rounded-lg' src={pcl6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;