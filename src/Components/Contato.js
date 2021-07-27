import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato2.png';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="UniJobs | Contato" description="Entre em contato." />
      <img src={foto} alt="Contato" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>mi.danelli@unijobs.com</li>
          <li>+55 (45) 00000-0000</li>
          <li>Rua das Ilusões, 000</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
