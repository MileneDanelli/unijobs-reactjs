import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li className={styles.titulo1}>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
            end
          >
            <svg
              width="163"
              height="33"
              viewBox="0 0 163 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.896 32.608C9.81733 32.608 6.638 31.506 4.358 29.302C2.078 27.098 0.938 24.0073 0.938 20.03V5.4H9.906V19.764C9.906 21.7147 10.248 23.1333 10.932 24.02C11.6413 24.9067 12.6547 25.35 13.972 25.35C15.2893 25.35 16.29 24.9067 16.974 24.02C17.6833 23.1333 18.038 21.7147 18.038 19.764V5.4H26.854V20.03C26.854 24.0073 25.714 27.098 23.434 29.302C21.154 31.506 17.9747 32.608 13.896 32.608ZM45.1388 10.834C47.6975 10.834 49.7495 11.6067 51.2948 13.152C52.8655 14.6973 53.6508 17.028 53.6508 20.144V32H45.0628V21.626C45.0628 19.2447 44.2142 18.054 42.5168 18.054C41.5542 18.054 40.7688 18.396 40.1608 19.08C39.5782 19.7387 39.2868 20.79 39.2868 22.234V32H30.6988V11.214H38.8688V13.266C39.6795 12.4553 40.6168 11.8473 41.6808 11.442C42.7448 11.0367 43.8975 10.834 45.1388 10.834ZM57.3805 11.214H65.9685V32H57.3805V11.214ZM61.6745 9.542C60.1291 9.542 58.8751 9.13667 57.9125 8.326C56.9751 7.49 56.5065 6.43867 56.5065 5.172C56.5065 3.90533 56.9751 2.86667 57.9125 2.056C58.8751 1.22 60.1291 0.801998 61.6745 0.801998C63.2451 0.801998 64.4991 1.19467 65.4365 1.98C66.3738 2.76533 66.8425 3.77866 66.8425 5.02C66.8425 6.33733 66.3738 7.42667 65.4365 8.288C64.4991 9.124 63.2451 9.542 61.6745 9.542Z"
                fill="#fff"
              />
              <path
                d="M76.767 32.608C74.6897 32.608 72.8023 32.2787 71.105 31.62C69.433 30.936 68.0523 29.948 66.963 28.656L71.789 22.956C72.4983 23.8427 73.195 24.5013 73.879 24.932C74.563 25.3627 75.2723 25.578 76.007 25.578C76.9443 25.578 77.6537 25.2993 78.135 24.742C78.6417 24.1847 78.895 23.3613 78.895 22.272V12.164H69.851V5.4H87.749V21.74C87.749 25.3627 86.8117 28.086 84.937 29.91C83.0877 31.7087 80.3643 32.608 76.767 32.608ZM102.577 32.38C100.272 32.38 98.1946 31.924 96.3453 31.012C94.5213 30.0747 93.09 28.7953 92.0513 27.174C91.0126 25.5273 90.4933 23.6653 90.4933 21.588C90.4933 19.5107 91.0126 17.6613 92.0513 16.04C93.09 14.3933 94.5213 13.114 96.3453 12.202C98.1946 11.29 100.272 10.834 102.577 10.834C104.908 10.834 106.985 11.29 108.809 12.202C110.659 13.114 112.09 14.3933 113.103 16.04C114.142 17.6613 114.661 19.5107 114.661 21.588C114.661 23.6653 114.142 25.5273 113.103 27.174C112.09 28.7953 110.659 30.0747 108.809 31.012C106.985 31.924 104.908 32.38 102.577 32.38ZM102.577 25.692C103.565 25.692 104.376 25.3373 105.009 24.628C105.643 23.8933 105.959 22.88 105.959 21.588C105.959 20.296 105.643 19.2953 105.009 18.586C104.376 17.8767 103.565 17.522 102.577 17.522C101.589 17.522 100.779 17.8767 100.145 18.586C99.512 19.2953 99.1953 20.296 99.1953 21.588C99.1953 22.88 99.512 23.8933 100.145 24.628C100.779 25.3373 101.589 25.692 102.577 25.692ZM131.219 10.834C133.043 10.834 134.715 11.2773 136.235 12.164C137.781 13.0253 138.997 14.2793 139.883 15.926C140.795 17.5473 141.251 19.4347 141.251 21.588C141.251 23.7413 140.795 25.6413 139.883 27.288C138.997 28.9347 137.781 30.2013 136.235 31.088C134.715 31.9493 133.043 32.38 131.219 32.38C128.661 32.38 126.761 31.6833 125.519 30.29V32H117.349V3.804H125.937V12.62C127.153 11.4293 128.914 10.834 131.219 10.834ZM129.167 25.692C130.155 25.692 130.966 25.3373 131.599 24.628C132.233 23.8933 132.549 22.88 132.549 21.588C132.549 20.296 132.233 19.2953 131.599 18.586C130.966 17.8767 130.155 17.522 129.167 17.522C128.179 17.522 127.369 17.8767 126.735 18.586C126.102 19.2953 125.785 20.296 125.785 21.588C125.785 22.88 126.102 23.8933 126.735 24.628C127.369 25.3373 128.179 25.692 129.167 25.692ZM152.089 32.38C150.315 32.38 148.567 32.19 146.845 31.81C145.122 31.43 143.729 30.936 142.665 30.328L145.021 24.666C145.983 25.2487 147.123 25.7047 148.441 26.034C149.758 26.3633 151.037 26.528 152.279 26.528C153.267 26.528 153.951 26.452 154.331 26.3C154.736 26.1227 154.939 25.8693 154.939 25.54C154.939 25.2107 154.685 24.9827 154.179 24.856C153.697 24.7293 152.899 24.6027 151.785 24.476C150.087 24.2733 148.643 24.02 147.453 23.716C146.262 23.3867 145.211 22.766 144.299 21.854C143.412 20.942 142.969 19.6373 142.969 17.94C142.969 16.5973 143.374 15.394 144.185 14.33C144.995 13.266 146.199 12.4173 147.795 11.784C149.416 11.1507 151.354 10.834 153.609 10.834C155.179 10.834 156.712 10.986 158.207 11.29C159.727 11.5687 161.019 11.9867 162.083 12.544L159.727 18.206C157.903 17.1927 155.901 16.686 153.723 16.686C151.848 16.686 150.911 17.0153 150.911 17.674C150.911 18.0033 151.164 18.244 151.671 18.396C152.177 18.5227 152.975 18.6493 154.065 18.776C155.762 18.9787 157.193 19.2447 158.359 19.574C159.549 19.9033 160.588 20.524 161.475 21.436C162.387 22.348 162.843 23.6527 162.843 25.35C162.843 26.642 162.437 27.82 161.627 28.884C160.816 29.948 159.6 30.7967 157.979 31.43C156.357 32.0633 154.394 32.38 152.089 32.38Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li className={styles.titulo2}>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="contato"
          >
            <p className={styles.contato}>Contato</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
