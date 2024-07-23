import React from 'react';
import showcase from '../../assets/documentScannerShowcase.png';
import styles from './index.module.css';

const DocumentScanner: React.FC = () => {
  return (
    <>
      <img src={showcase} className={styles.documentScanner_showcase} />
    </>
  );
};

export default DocumentScanner;
