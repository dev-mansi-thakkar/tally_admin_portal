import React from 'react';
import styles from './Cards.module.css';

const Card = ({isPrimary=false,children}) => {
    return (
      <div className={` ${isPrimary ? 'bg-primary':'bg-white'} rounded-lg ${styles.card} shadow-md p-4`}>
        {children}
      </div>
    );
  };



  
export default Card;