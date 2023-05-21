import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const SubCategory = () => {
    return (
        <div className='mt-8'>
            <div className='text-center'>
                <h2 className='text-3xl text-green-800 mb-4'>Shop By Category</h2>

                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab>Science Kits</Tab>
                        <Tab>Math Learning</Tab>
                        <Tab>Engineering Kits</Tab>
                    </TabList>

                    <TabPanel>
                        <h2></h2>
                    </TabPanel>
                    <TabPanel>
                        <h2></h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SubCategory;