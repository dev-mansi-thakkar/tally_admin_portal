'use client';

import { Tooltip } from 'react-tooltip'
import { useEffect, useState, useContext } from 'react';
import {TotalContext} from "../../contexts/TotalContext";

// styles
import styles from './Tab.module.css'
import 'react-tooltip/dist/react-tooltip.css'

import Data from '../../utils/data.json';

const getColor = {
    'Excellent':'circleGreen',
    'Good':'circleBlue',
    'Satisfactory':'circleOrange',
    'Needs Improvement':'circleRed'
}

const getStyles = (rating) =>{
    return `${getColor[rating]}`
}

const CustomTable = ({activeTab, searchInput}) => {
    const [records,setRecords] = useState(Data);
    const { updateTotal } = useContext(TotalContext);

    useEffect(() => {
        const tableHeader = document.querySelector('.sticky-header');
        const table = document.querySelector('.scrollable');

        const handleScroll = () => {
            if (tableHeader && table) {
                if (window.pageYOffset > table.offsetTop) {
                    tableHeader.classList.add('sticky');
                } else {
                    tableHeader.classList.remove('sticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        let totalCount = 0
        if(activeTab === 'All'){
            setRecords(Data.sort((a, b) => a.id - b.id));
            totalCount = Data.length;
        } else if(activeTab === "Top20"){
            const sortedData = Data.sort((a, b) => b.overallScore - a.overallScore);
            const getTop20Records = sortedData.slice(0, 20);
            setRecords(getTop20Records);
            totalCount = getTop20Records.length;
        }
        else{
            const filteredRecords = Data.filter(record => record.overallRating === activeTab);  
            setRecords(filteredRecords);
            totalCount = filteredRecords.length;
        }
        updateTotal(totalCount);
    },[activeTab]);

    useEffect(()=>{
       
        if(searchInput.length > 2){
            let totalCount = 0;
            const pattern = searchInput;
            const flags = "gi"; 
            const regex = new RegExp(pattern, flags);
            const filteredRecords = records.filter(record => record.name.match(regex));  
            totalCount = filteredRecords.length;
            setRecords(filteredRecords);
            updateTotal(totalCount);
        }
        if(!searchInput){
            let totalCount = 0;
            setRecords(Data.sort((a, b) => a.id - b.id));
            totalCount = Data.length;
            updateTotal(totalCount);
        }
        
    }, [searchInput])
    
    return (
            <div className="shadow-md scrollable rounded-lg max-h-[calc(100vh-40vh)]">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50 sticky-header">
                        <tr className={styles.headerRow}>
                            <th className="px-2 py-2 text-xs text-gray-600">#</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Name</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Submission Time</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Overall Score</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Overall Rating</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Rag Implementation</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Fine-Tuning Language Model</th>
                            <th className="px-2 py-2 text-xs text-gray-600">MultiModal AI Integration</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Python & Frameworks</th>
                            <th className="px-2 py-2 text-xs text-gray-600">AI Model Deployment</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Analyzing User Feedback (RLHF)</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Problem Solving Capabilities</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Teamwork & Communications</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Motivation & Adaptability</th>
                            <th className="px-2 py-2 text-xs text-gray-600">Add to interview shortlist</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-gray-900 font-satoshi text-xs text-sm">
                        {records.map((item, index) => (
                            <tr key={index}>

                                <td className="px-4 py-2 whitespace-nowrap">{item.id}</td>
                                <td className="px-3 py-2 whitespace-nowrap">{item.name}</td>
                                <td className="px-3 py-2 whitespace-nowrap">{item.submissionTime}</td>
                                <td className="px-3 py-2 whitespace-nowrap">{item.overallScore}</td>
                                <td className="px-3 py-2 whitespace-nowrap">{item.overallRating}</td>
                                <td className="px-2 py-2 text-center relative">
                                    <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.ragImplementation)} block`}
                                        data-tooltip-id="good-tooltip" 
                                        data-tooltip-content={`${item.ragImplementation}`}
                                    ></span>
                                    <Tooltip id="good-tooltip" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                    <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.fineTuningLanguageModel)} block`}
                                        data-tooltip-id="excellent-tooltip" 
                                        data-tooltip-content={`${item.fineTuningLanguageModel}`}
                                    ></span>
                                    <Tooltip id="excellent-tooltip" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                    <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.multiModalAIIntegration)} block`}
                                        data-tooltip-id="good-tooltip2" 
                                        data-tooltip-content={`${item.multiModalAIIntegration}`}
                                    ></span>
                                    <Tooltip id="good-tooltip2" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                    <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.pythonAndFrameworks)} block`}
                                        data-tip="Satisfactory"
                                        data-tooltip-id="satisfactory-tooltip" 
                                        data-tooltip-content={`${item.pythonAndFrameworks}`}
                                    ></span>
                                    <Tooltip id="satisfactory-tooltip" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.aiModelDeployment)} block`}
                                        data-tooltip-id="good-tooltip3" 
                                        data-tooltip-content={`${item.aiModelDeployment}`}
                                    ></span>
                                    <Tooltip id="good-tooltip3" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                    <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.analyzingUserFeedbackRLHF)} block`}
                                        data-tip="Needs Improvement"
                                        data-tooltip-id="needs-improvement" 
                                        data-tooltip-content={`${item.analyzingUserFeedbackRLHF}`}
                                    ></span>
                                    <Tooltip id="needs-improvement" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.problemSolvingCapabilities)} block`}
                                        data-tooltip-id="good-tooltip4" 
                                        data-tooltip-content={`${item.problemSolvingCapabilities}`}
                                    ></span>
                                    <Tooltip id="good-tooltip4" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.teamworkAndCommunications)} block`}
                                        data-tooltip-id="excellent-tooltip2" 
                                        data-tooltip-content={`${item.teamworkAndCommunications}`}
                                    ></span>
                                    <Tooltip id="excellent-tooltip2" />
                                </td>
                                <td className="px-2 py-2 text-center relative">
                                <span
                                        className={`w-4 h-4 rounded-full mx-auto ${getStyles(item.motivationAndAdaptability)} block`}
                                        data-tooltip-id="excellent-tooltip3" 
                                        data-tooltip-content={`${item.motivationAndAdaptability}`}
                                    ></span>
                                    <Tooltip id="excellent-tooltip3" />
                                </td>
                                
                                <td className="px-2 py-2 text-center">
                                    <input className={styles.inputCheckbox} type="checkbox" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default CustomTable;