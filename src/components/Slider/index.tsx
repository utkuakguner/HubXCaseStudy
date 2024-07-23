import './index.css';

import React, { useMemo } from 'react';
import { slides, strings } from '../../constants';

interface Props {
  activeSlide: string;
}

const Slider: React.FC<Props> = ({ activeSlide }) => {
  const slide = useMemo(() => slides[activeSlide], [activeSlide]);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slider-showcase">{slide.showcase}</div>
      </div>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="slider-header">{slide.headerText}</div>
          <div className="slider-title">{slide.titleText}</div>
          <div className="slider-description">{slide.descriptionText}</div>
          <button className="slider-cta">{strings.learnMore}</button>{' '}
        </div>
      </div>
    </div>
  );
};

export default Slider;
