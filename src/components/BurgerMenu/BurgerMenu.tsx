// src/components/BurgerMenu/BurgerMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
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
  // Тимчасові значення для кількості товарів/вибраного
  const favCount = 0; // Згодом буде з контексту
  const cartCount = 0; // Згодом буде з контексту

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
          <NavBar onLinkClick={onClose} className={styles.burgerNavList} />{' '}
          {/* <<< Використовуємо NavBar */}
        </nav>

        {/* Іконки Favorites та Cart внизу меню */}
        <div className={styles.menuFooterIcons}>
          <Link to="/favorites" className={styles.iconLink} onClick={onClose}>
            {/* <FavIcon className={styles.icon} /> */}
            <span className={styles.iconText}>Fav ({favCount})</span>
          </Link>
          <Link to="/cart" className={styles.iconLink} onClick={onClose}>
            {/* <CartIcon className={styles.icon} /> */}
            <span className={styles.iconText}>Cart ({cartCount})</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
