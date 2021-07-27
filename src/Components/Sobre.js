import React from 'react';
import sobre from '../img/sobre.jpg';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <img src={sobre} alt="sobre." />
    </div>
  );
};

export default Sobre;
