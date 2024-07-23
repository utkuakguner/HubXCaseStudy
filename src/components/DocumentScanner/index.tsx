import './index.css';

import React from 'react';
import showcase from '../../assets/documentScannerShowcase.png';

const DocumentScanner: React.FC = () => {
  return (
    <>
      <img src={showcase} className="document-scanner-showcase" />
    </>
  );
};

export default DocumentScanner;
