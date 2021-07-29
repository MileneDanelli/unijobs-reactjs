import React from 'react';
import Head from './Head';
import styles from './Funcionamento.module.css';
import anunciar from '../img/anunciar.png';
import buscar from '../img/buscar.png';

const Funcionamento = () => {
  return (
    <>
      <h1 className={styles.titulo}>Como funciona a UniJobs</h1>
      <section className={`${styles.sobre} animeLeft`}>
        <Head title="UniJobs | Funcionamento" description="Entre em contato." />
        <img src={anunciar} alt="Anunciar" />
        <img src={buscar} alt="Buscar" />
      </section>
    </>
  );
};

export default Funcionamento;
