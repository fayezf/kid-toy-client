import React from 'react';
import img from '../../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute flex items-center rounded-xl h-full left-0 top-0">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-semibold'>A World To Explore</h2>
                        <p>Active toys for smart and active kids. Bring fun and non-stop learning for your little ones</p>
                        <div>
                            <button className="btn btn-outline btn-secondary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;