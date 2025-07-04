import React from 'react';
import styles from './Footer.module.scss';
import cn from 'classnames';
import '../../assets/styles/global.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/Logo.svg';

// eslint-disable-next-line max-len
import ArrowUp from '../../assets/icons/Chevron (Arrow Up).svg';

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div
        className={cn(
          'container',
          'u-flex',
          'u-flex--col',
          'u-flex--md--row',
          'u-flex--md--between',
          'u-gap-32',
          'u-flex--md--center',
        )}
      >
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logo__img} />
        </div>
        <div
          className={cn(
            styles.footer_links,
            'u-flex--col',
            'u-flex',
            'u-gap-16',
            'u-flex--md--row',
            'u-gap-md-16',
            'u-gap-lg-48',
            'u-uppercase',
          )}
        >
          <a
            href="https://github.com/ruslan-ihnatenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link to="/contact">Contact</Link>
          <Link to="/rights">Rights</Link>
        </div>

        <div className={styles.backToTopWrapper}>
          <button
            className={styles.backToTop}
            onClick={handleBackToTop}
            type="button"
            aria-label="Back to top"
          >
            <span className={cn(styles.backToTopText, 'u-small-text')}>
              Back to top
            </span>
            <span className={cn(styles.backToTopIcon)}>
              <img
                src={ArrowUp}
                alt="back to top"
                className={styles.backToTopArrow}
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
