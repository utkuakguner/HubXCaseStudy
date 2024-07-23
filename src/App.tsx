import './App.css';

import React, { useState } from 'react';

import Slider from './components/Slider';
import Tabs from './components/Tabs';
import { slides } from './constants';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(slides.documentScanner.key);

  return (
    <main className="app-container">
      <Slider activeSlide={activeSlide} />
      <Tabs activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
    </main>
  );
};

export default App;
