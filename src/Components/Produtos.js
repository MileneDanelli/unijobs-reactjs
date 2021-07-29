import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Banner from './Banner';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/itens')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <>
      <section className={`${styles.container} animeLeft`}>
        <Head title="UniJobs" description="UniJobs." />
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
          className={styles.card}
        >
          {produtos.map((produto) => (
            <div className={styles.card} key={produto.id}>
              <Link to={`produto/${produto.id}`} key={produto.id}>
                <img src={produto.miniatura} alt="foto do produto." />
                <div>
                  <h1>{produto.titulo}</h1>
                  <p>{produto.descricao}</p>
                </div>
              </Link>
            </div>
          ))}
        </AutoplaySlider>
      </section>
      <Banner />
    </>
  );
};
export default Produtos;
