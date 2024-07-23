import React from 'react';
import showcase1 from '../../assets/signatureStampShowcase1.png';
import showcase2 from '../../assets/signatureStampShowcase2.png';
import showcase3 from '../../assets/signatureStampShowcase3.png';
import styles from './index.module.css';

const SignStamp: React.FC = () => {
  return (
    <>
      <img src={showcase1} className={styles.signStamp_showcase1} />
      <img src={showcase2} className={styles.signStamp_showcase2} />
      <img src={showcase3} className={styles.signStamp_showcase3} />
    </>
  );
};

export default SignStamp;
