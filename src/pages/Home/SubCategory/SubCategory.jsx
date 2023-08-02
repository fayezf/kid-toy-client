import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from '../../Shared/SubCategoryCard/SubCategoryCard';
import SubTab from '../SubTab/SubTab';

const SubCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-iota-one.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const science = toys.filter(item => item.subCategory === 'science');
    const math = toys.filter(item => item.subCategory === 'math');
    const engineering = toys.filter(item => item.subCategory === 'engineering');

    return (
        <div className='mt-8'>
            <div className='text-center'>
                <h2 className='text-3xl text-black font-semibold mb-4'>Shop By Category</h2>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Science Kits</Tab>
                        <Tab>Math Learning</Tab>
                        <Tab>Engineering Kits</Tab>
                    </TabList>
                    <TabPanel>
                        <SubTab items={science}></SubTab>
                    </TabPanel>
                    <TabPanel>
                        <SubTab items={math}></SubTab>
                    </TabPanel>
                    <TabPanel>
                        <SubTab items={engineering}></SubTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SubCategory;