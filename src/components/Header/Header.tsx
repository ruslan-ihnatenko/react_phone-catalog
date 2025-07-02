// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';

import BurgerMenu from '../BurgerMenu';
import NavBar from '../NavBar';

// Імпортуємо SVG-іконки, якщо є:
// import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
// import { ReactComponent as FavIcon } from '../../assets/icons/fav.svg';
// import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favCount = 0;
  const cartCount = 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__content, 'container-full')}>
        <div className={styles['header__logo-box']}>
          <Link to="/" className={styles.header__logo}>
            NICE<span className={styles['header__logo-light']}> GADGETS</span>
          </Link>
        </div>

        {/* NavBar for tablet/desktop */}
        <nav className={styles.header__nav}>
          <NavBar
            className="u-flex
          u-flex--row u-gap-16 u-gap-md-32 u-gap-lg-64"
          />
        </nav>

        {/* Icons for tablet/desktop */}
        <div className={styles.header__icons}>
          <button
            className={classNames(
              styles['header__icon-btn'],
              styles['header__icon-btn--fav'],
            )}
          >
            {/* Stub: Heart icon */}
            <span className={styles['header__icon-stub']}>
              <svg width="16" height="16">
                <rect x="6" y="2" width="4" height="12" rx="2" fill="#fff" />
              </svg>
            </span>
            <span className={styles.header__badge}>{favCount}</span>
          </button>
          <button
            className={classNames(
              styles['header__icon-btn'],
              styles['header__icon-btn--cart'],
            )}
          >
            {/* Stub: Cart icon */}
            <span className={styles['header__icon-stub']}>
              <svg width="16" height="16">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <span className={styles.header__badge}>{cartCount}</span>
          </button>
        </div>

        {/* Burger/close button for mobile only */}
        <div className={styles['header__button-container']}>
          <button
            type="button"
            className={classNames(
              styles['header__icon-btn'],
              styles['header__icon-btn--menu'],
              { [styles.open]: isMenuOpen },
            )}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles['header__icon-stub']}>
              {isMenuOpen ? (
                // Close (X)
                <svg width="16" height="16">
                  <line
                    x1="2"
                    y1="2"
                    x2="14"
                    y2="14"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="14"
                    y1="2"
                    x2="2"
                    y2="14"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                // Burger (3 bars)
                <svg width="16" height="16">
                  <rect y="3" width="16" height="2" rx="1" fill="#fff" />
                  <rect y="7" width="16" height="2" rx="1" fill="#fff" />
                  <rect y="11" width="16" height="2" rx="1" fill="#fff" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
      <BurgerMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
