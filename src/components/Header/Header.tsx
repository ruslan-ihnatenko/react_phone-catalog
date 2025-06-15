// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';

import BurgerMenu from '../BurgerMenu'; // <<< Імпортуємо BurgerMenu
import NavBar from '../NavBar';

// Імпортуємо SVG-іконки, якщо є:
// import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
// import { ReactComponent as FavIcon } from '../../assets/icons/fav.svg';
// import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Стан для бургер-меню
  const location = useLocation();
  // Тимчасові значення для кількості товарів/вибраного
  const favCount = 0;
  const cartCount = 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Додаємо/видаляємо клас, щоб заблокувати скрол на body, коли меню відкрите
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={styles.header}>
      <div className={classNames(styles.headerContent, 'container')}>
        <Link to="/" className={styles.logo}>
          NICE<span className={styles.logoLight}> GADGETS</span>
        </Link>

        {/* Навігація для десктопу */}
        <nav className={styles.navDesktop}>
          <NavBar /> {/* <<< Використовуємо NavBar */}
        </nav>

        {/* Іконки Favorites та Cart для десктопу */}
        <div className={styles.iconsDesktop}>
          <Link
            to="/favorites"
            className={classNames(styles.iconLink, {
              [styles.active]: location.pathname === '/favorites',
            })}
          >
            {/* <FavIcon className={styles.icon} /> */}
            <span className={styles.iconText}>Fav ({favCount})</span>
          </Link>
          <Link
            to="/cart"
            className={classNames(styles.iconLink, {
              [styles.active]: location.pathname === '/cart',
            })}
          >
            {/* <CartIcon className={styles.icon} /> */}
            <span className={styles.iconText}>Cart ({cartCount})</span>
          </Link>
        </div>

        {/* Бургер-меню кнопка для мобільних */}
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={classNames(styles.burgerButton, {
              [styles.open]: isMenuOpen,
            })}
            onClick={toggleMenu}
          >
            {/* <BurgerIcon className={styles.burgerIcon} /> */}
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </div>

      {/* Рендеримо компонент BurgerMenu */}
      <BurgerMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
