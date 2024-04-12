import React from 'react';
import Image from 'next/image';
import styles from './HeaderLayout.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className='text-black font-bold'>Project Name</h1>
                <Image src="/assets/icons/CaretDown.png" alt="Project Logo" width={20} height={20} />
            </div>
            <div className={styles.center}>
                <button className={styles.dashboard}>Dashboard</button>
                <button className={styles.submission}>Submission</button>
            </div>
            <div className={styles.profile}>
                <Image src="/assets/icons/Ellipse.png" alt="Profile Photo" width={46} height={46} />
            </div>
        </header>
    );
};

export default Header;
