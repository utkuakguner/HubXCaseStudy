import './index.css';

import React from 'react';
import showcase1 from '../../assets/batchScanningShowcase1.png';
import showcase2 from '../../assets/batchScanningShowcase2.png';

const BatchScanning: React.FC = () => {
  return (
    <>
      <img src={showcase1} className="batch-scanning-showcase1" />
      <img src={showcase2} className="batch-scanning-showcase2" />
      <img src={showcase2} className="batch-scanning-showcase3" />
      <img src={showcase2} className="batch-scanning-showcase4" />
    </>
  );
};

export default BatchScanning;
