// src/components/NavBar/NavBar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.scss';
import classNames from 'classnames';

interface NavBarProps {
  onLinkClick?: () => void; // Функція, що викликається при кліку на посилання (наприклад, для закриття меню)
  className?: string; // Додатковий клас для стилізації контейнера UL
}

const NavBar: React.FC<NavBarProps> = ({ onLinkClick, className }) => {
  const location = useLocation(); // Використовуємо useLocation для визначення активного посилання

  return (
    <ul className={classNames(styles.navList, className)}>
      <li className={styles.navItem}>
        <Link
          to="/"
          className={classNames(styles.navLink, {
            [styles.active]: location.pathname === '/',
          })}
          onClick={onLinkClick}
        >
          HOME
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/phones"
          className={classNames(styles.navLink, {
            [styles.active]: location.pathname === '/phones',
          })}
          onClick={onLinkClick}
        >
          PHONES
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/tablets"
          className={classNames(styles.navLink, {
            [styles.active]: location.pathname === '/tablets',
          })}
          onClick={onLinkClick}
        >
          TABLETS
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/accessories"
          className={classNames(styles.navLink, {
            [styles.active]: location.pathname === '/accessories',
          })}
          onClick={onLinkClick}
        >
          ACCESSORIES
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
