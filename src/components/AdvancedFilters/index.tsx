import React from 'react';
import showcase1 from '../../assets/advancedFiltersShowcase1.png';
import showcase2 from '../../assets/advancedFiltersShowcase2.png';
import showcase3 from '../../assets/advancedFiltersShowcase3.png';
import styles from './index.module.css';

const AdvancedFilters: React.FC = () => {
  return (
    <>
      <img src={showcase1} className={styles.advancedFilters_showcase1} />
      <img src={showcase2} className={styles.advancedFilters_showcase2} />
      <img src={showcase3} className={styles.advancedFilters_showcase3} />
    </>
  );
};

export default AdvancedFilters;
