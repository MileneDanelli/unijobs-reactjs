import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';
import InputMask from 'react-input-mask';
import { FaWhatsapp } from 'react-icons/fa';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const maskPhone = (phone) =>
    phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (err) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`http://localhost:8080/produtos/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className="animeLeft">
      <Head title={`UniJobs | ${produto.titulo}`} description="Produto." />
      <div className={styles.produto}>
        <div>
          <img src={produto.miniatura} alt="produto" />
        </div>
        <div>
          <h1 className={styles.titulo}>{produto.titulo}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
          <p className={styles.descricao}>Prazo: {produto.prazo} dias.</p>
        </div>
      </div>
      <div className={styles.anunciante}>
        Por:
        <p>{produto.anunciante}</p>
        <p className={styles.contato}>
          <a
            style={{
              color: '#058004',
              fontFamily: 'Open Sans',
              fontSize: '25px',
            }}
            href={`http://wa.me/55${produto.contato}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} style={{ marginRight: 12 }} />
            {maskPhone(produto.contato)}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Produto;
