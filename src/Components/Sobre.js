import React from 'react';
import Head from './Head';
import styles from './Sobre.module.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Sobre = () => {
  return (
    <>
      <div className={`${styles.sobre} animeLeft`}>
        <Head title="UniJobs | Sobre" description="Entre em contato." />
        <h1>Quem somos?</h1>
        <p>
          Somos um grupo de alunos do curso de engenharia de software e criamos
          a plataforma UniJobs com objetivo de apoiar a comunidade UniAmérica na
          geração de renda por meio da divulgação de produtos ou serviços
          ofertados por alunos dos mais diferentes cursos.
        </p>
      </div>
      <section className={styles.container}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
          className={styles.card}
        >
          <div className={styles.card}>
            <img
              src="https://avatars.githubusercontent.com/u/42577886?s=400&u=602d8401414641ab5207bbd771bb733d70ee31bb&v=4"
              alt="Milene Danelli"
            />
            <h1>Desenvolvedora Web Full Stack</h1>
            <p>
              Desenvolvedora Web Full Stack na Empresa Friella e acadêmica de
              Engenharia de Software na UniAmérica.
            </p>
            <a
              href="https://github.com/MileneDanelli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/milene-danelli-4a2480162/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </AutoplaySlider>
      </section>
    </>
  );
};

export default Sobre;
