// src/components/BurgerMenu/BurgerMenu.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import classNames from 'classnames'; // Вже встановлено
import NavBar from '../NavBar';

// Імпортуємо іконки (поки що заглушки або реальні)
// import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
// import { ReactComponent as FavIcon } from '../../assets/icons/fav.svg';
// import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <div
      className={classNames(styles.overlay, { [styles.open]: isOpen })}
      onClick={onClose}
    >
      <div
        className={classNames(styles.menu, { [styles.open]: isOpen })}
        onClick={e => e.stopPropagation()} // Prevent clicks inside menu from closing
      >
        {/* Навігація бургер-меню */}
        <nav className={styles.menuNav}>
          <NavBar
            onLinkClick={onClose}
            className={classNames(
              styles.burgerNavList,
              'u-flex',
              'u-flex--col',
              'u-gap-16',
            )}
          />
        </nav>

        {/* Новий блок для кнопок внизу */}
        <div className={styles.menuFooterActions}>
          <Link
            to="/favorites"
            className={classNames(styles.menuFooterBtn, {
              [styles['menuFooterBtn--active']]:
                location.pathname === '/favorites',
            })}
            onClick={onClose}
          >
            <span className={styles.menuFooterBtn__icon}>
              <svg width="16" height="16">
                <rect x="6" y="2" width="4" height="12" rx="2" fill="#fff" />
              </svg>
            </span>
          </Link>
          <Link
            to="/cart"
            className={classNames(styles.menuFooterBtn, {
              [styles['menuFooterBtn--active']]: location.pathname === '/cart',
            })}
            onClick={onClose}
          >
            <span className={styles.menuFooterBtn__icon}>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
