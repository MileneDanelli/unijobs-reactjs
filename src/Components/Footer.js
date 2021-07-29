import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';
import logo_uniamerica from '../img/logo-uniamerica.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a
            href="http://www.uniamerica.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ width: '100px', marginRight: '20rem' }}
              src={logo_uniamerica}
              alt="UniAmérica"
            />
          </a>
        </li>
        <li>
          <NavLink to="sobre" className={styles.link}>
            <p className={styles.escrita}>Quem somos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="funcionamento" className={styles.link}>
            <p className={styles.escrita}>Como funciona a UniJobs</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="contato" className={styles.link}>
            <p className={styles.escrita}>Contato</p>
          </NavLink>
        </li>
      </ul>
      <div className={styles.midias}>
        <a
          href="https://www.facebook.com/UniAmericaUA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook size={25} type="outline" />
        </a>
        <a
          href="https://twitter.com/uniamerica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter size={25} />
        </a>
        <a
          href="https://www.youtube.com/user/uniamerica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiYoutube size={25} />
        </a>
        <a
          href="https://www.instagram.com/uniamerica.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
