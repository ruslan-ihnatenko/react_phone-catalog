// src/components/BurgerMenu/BurgerMenu.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import classNames from 'classnames'; // Вже встановлено
import NavBar from '../NavBar';

// Імпортуємо іконки (поки що заглушки або реальні)
// import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import FavIcon from '../../assets/icons/Favourites (Heart Like).svg';
import CartIcon from '../../assets/icons/Shopping bag (Cart).svg';

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
              <img src={FavIcon} alt="favorite" />
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
              <img src={CartIcon} alt="cart" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
