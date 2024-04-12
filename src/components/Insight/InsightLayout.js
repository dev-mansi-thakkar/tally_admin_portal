'use client';
import React, { useEffect, useState ,useContext} from 'react';
import styles from './InsightLayout.module.css';


// components
import Card from "../Cards/Card";
import {TotalContext} from "../../contexts/TotalContext"

const InsightLayout = () => {
    const { total } = useContext(TotalContext);
    return (
        <div className='grid grid-cols-12 my-5 gap-3 mx-2'>
            <div className="col-span-2">
                <Card isPrimary={true}>
                    <div className={styles.cardHeading}>
                        Total
                    </div>
                    <div className={`${styles.cardContent} mt-3 font-extrabold`}>
                        {total}
                    </div>
                </Card>
            </div>

            <div className="col-span-2">
                <Card>
                    <div className={`${styles.cardHeading} font-normal text-secondary`}>
                        Percentage Assessed
                    </div>
                    <div className={`${styles.cardContent} text-primary mt-3 font-extrabold`}>
                        100%
                        <sub className={`${styles.countBadge} font-medium p-2`}>
                            18/18
                        </sub>
                    </div>
                </Card>
            </div>

            <div className='col-span-6'>
                <Card>
                    <div className={`${styles.cardHeading} font-normal text-secondary text-center`}>
                        Submission Quality
                        <div className={`${styles.submissionRatingsContainer} mt-3`}>
                            <div className={`${styles.submissionRating} ${styles.excellentRating} `}>
                                <div>Excellent</div>
                                <div>10</div>
                            </div>
                            <div className={`${styles.submissionRating} ${styles.goodRating}`}>
                                <div>Good</div>
                                <div>8</div>
                            </div>
                            <div className={`${styles.submissionRating} ${styles.satisfactoryRating}`}>
                                <div>Satisfactory</div>
                                <div>4</div>
                            </div>
                            <div className={`${styles.submissionRating} ${styles.needsImpRating}`}>
                                <div>Needs Improvement</div>
                                <div>2</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="col-span-2">
                <Card>
                    <div className={`${styles.cardHeading} text-secondary`}>
                        Interview Shortlist
                    </div>
                    <div className={`${styles.cardContent} mt-3 text-primary`}>
                        20
                    </div>
                </Card>
            </div>



        </div>
    );
}

export default InsightLayout;
