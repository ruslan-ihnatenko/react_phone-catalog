import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.logo}>Logo</div>
        <a
          href="https://github.com/ruslan-ihnatenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <button className={styles.backToTop}>Back to top</button>
      </div>
    </footer>
  );
};

export default Footer;
