import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-12'>
            <div className='relative ml-64'>
                <img src="https://img.freepik.com/free-psd/3d-female-character-with-404-error-message_23-2148938897.jpg?w=740&t=st=1684476562~exp=1684477162~hmac=1b6e5f0dce676728ba57647b8c677a03abc08c800e177eeb70d75a2383ca337b" alt="" />
                <div className='absolute left-5 right-5 bottom-5'>
                    <button className='btn btn-error'><Link className='text-decoration-none text-white' to='/'>Back To Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;