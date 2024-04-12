// components/TabComponent.js
'use client'
import React, { useState, useEffect } from 'react';
import TabContent from "./TabContent";
import {tabFilters} from "../../utils/constants";
import styles from './Tab.module.css'

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        setActiveTab('All'); // Set initial active tab when component mounts
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className='grid grid-cols-12'>
                <div className="col-span-7">
                    <div className="flex flex-wrap justify-start items-center bg-white p-4 rounded-lg">
                        {tabFilters.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabClick(tab)}
                                className={`mr-4 mb-2 px-4 py-2 text-base text-gray-600 rounded-tl-lg rounded-tr-lg focus:outline-none ${activeTab === tab ? 'bg-gray-900 text-white rounded' : ''}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col-span-3"></div>

                <div className="col-span-2">
                    <div className='mt-3'>
                        <label htmlFor="voice-search" className="sr-only">Search</label>
                        <input type="text" id="voice-search" placeholder='Search' required className={styles.searchInput}/>
                    </div>
                </div>

            </div>
            <div className='overflow-hidden mx-3 mb-5'>
                <TabContent activeTab={activeTab} />
            </div>
        </>
    );
};

export default TabComponent;
