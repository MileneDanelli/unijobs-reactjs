import React from 'react';
import sobre from '../img/sobre.jpg';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.sobre}>
      <img src={sobre} alt="sobre." />
    </div>
  );
};

export default Banner;
