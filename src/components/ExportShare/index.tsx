import './index.css';

import React from 'react';
import showcase1 from '../../assets/exportShareShowcase1.png';
import showcase2 from '../../assets/exportShareShowcase2.png';
import showcase3 from '../../assets/exportShareShowcase3.png';
import showcase4 from '../../assets/exportShareShowcase4.png';
import showcase5 from '../../assets/exportShareShowcase5.png';

const ExportShare: React.FC = () => {
  return (
    <>
      <img src={showcase1} className="export-share-showcase1" />
      <img src={showcase2} className="export-share-showcase2" />
      <img src={showcase3} className="export-share-showcase3" />
      <img src={showcase4} className="export-share-showcase4" />
      <img src={showcase5} className="export-share-showcase5" />
    </>
  );
};

export default ExportShare;
