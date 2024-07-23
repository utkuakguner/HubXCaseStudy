import React from 'react';
import showcase1 from '../../assets/batchScanningShowcase1.png';
import showcase2 from '../../assets/batchScanningShowcase2.png';
import styles from './index.module.css';

const BatchScanning: React.FC = () => {
  return (
    <>
      <img src={showcase1} className={styles.batchScanning_showcase1} />
      <img src={showcase2} className={styles.batchScanning_showcase2} />
      <img src={showcase2} className={styles.batchScanning_showcase3} />
      <img src={showcase2} className={styles.batchScanning_showcase4} />
    </>
  );
};

export default BatchScanning;
