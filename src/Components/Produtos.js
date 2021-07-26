import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/itens')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="UniJobs" description="UniJobs." />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.miniatura} alt="foto do produto." />
          <h1 className={styles.nome}>{produto.titulo}</h1>
        </Link>
      ))}
    </section>
  );
};
export default Produtos;
