import React from 'react';

// import styles from './index.module.css';

interface Props {
  activeSlide: string;
}

const Slider: React.FC<Props> = ({ activeSlide }) => {
  return <>{activeSlide}</>;
};

export default Slider;
