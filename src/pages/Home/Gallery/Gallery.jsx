import React from 'react';
import clg1 from '../../../assets/gallery/clg1.jpg'
import clg2 from '../../../assets/gallery/clg2.jpg'
import clg3 from '../../../assets/gallery/clg3.jpg'
import clg4 from '../../../assets/gallery/clg4.jpg'
import clg5 from '../../../assets/gallery/clg5.jpg'
import clg6 from '../../../assets/gallery/clg6.jpg'

const Gallery = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-center text-3xl text-green-500'>Photo Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-2 mt-4'>
                <img className='rounded-lg' src={clg1} alt="" />
                <img className='rounded-lg' src={clg2} alt="" />
                <img className='rounded-lg' src={clg3} alt="" />
                <img className='rounded-lg' src={clg4} alt="" />
                <img className='rounded-lg' src={clg5} alt="" />
                <img className='rounded-lg' src={clg6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;