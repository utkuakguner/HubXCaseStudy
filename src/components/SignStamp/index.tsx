import './index.css';

import React from 'react';
import showcase1 from '../../assets/signatureStampShowcase1.png';
import showcase2 from '../../assets/signatureStampShowcase2.png';
import showcase3 from '../../assets/signatureStampShowcase3.png';

const SignStamp: React.FC = () => {
  return (
    <>
      <img src={showcase1} className="sign-stamp-showcase1" />
      <img src={showcase2} className="sign-stamp-showcase2" />
      <img src={showcase3} className="sign-stamp-showcase3" />
    </>
  );
};

export default SignStamp;
