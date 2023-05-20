import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const SubCategory = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Chemistry Toys</Tab>
                    <Tab>Biology Toys</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;