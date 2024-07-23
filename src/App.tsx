import React, { useState } from 'react';

import Slider from './components/Slider';
import Tabs from './components/Tabs';
import { slides } from './constants';
import styles from './App.module.css';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(slides.documentScanner.key);

  return (
    <main className={styles.app__container}>
      <Slider activeSlide={activeSlide} />
      <Tabs activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
    </main>
  );
};

export default App;
