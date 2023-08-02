import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-3xl text-black'>Questions Area</h2>
            <div className='px-8'>
                <h3 className='font-semibold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <h5 className='text-2xl'>Answer: <span className='text-green-400'>Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.</span></h5>
                <h3 className='font-semibold mt-4'>2. Comparison of SQL vs NoSQL?</h3>
                <h5 className='text-2xl'>Answer: <span className='text-green-400'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</span></h5>
                <h3 className='font-semibold mt-4'>3. What is express js? What is Nest JS?</h3>
                <h5 className='text-2xl'>Answer: <span className='text-green-400'>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</span></h5>
                <h3 className='font-semibold mt-4'>4. What is MongoDB aggregation and how does it work?</h3>
                <h5 className='text-2xl'>Answer: <span className='text-green-400'> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</span></h5>
            </div>
        </div>
    );
};

export default Blogs;