import React from 'react';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.visuallyHidden}>Product Catalog</h1>
      {/* Цей клас ми зробимо пізніше */}
      {/* Тут будуть інші компоненти HomePage */}
      <p>Welcome to Nice Gadgets store!</p>
    </div>
  );
};

export default HomePage;
