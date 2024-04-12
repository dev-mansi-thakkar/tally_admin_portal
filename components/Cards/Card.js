import React from 'react';
import styles from './Cards.module.css';

const Card = ({isPrimary,children}) => {
    return (
      <div className={` ${isPrimary ? 'bg-primary':'bg-white'} rounded-lg ${styles.card} shadow-md p-4`}>
        {children}
      </div>
    );
  };


// Default props
  Card.defaultProps = {
    isPrimary:false
  }
  
  export default Card;