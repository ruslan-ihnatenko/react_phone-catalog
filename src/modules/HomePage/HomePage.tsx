import React from 'react';
// eslint-disable-next-line max-len
import { HomeBannerSlider } from '../../components/HomeBannerSlider/HomeBannerSlider';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className="u-h1">Welcome to Nice Gadgets store!</h1>
      <HomeBannerSlider />
    </div>
  );
};

export default HomePage;
