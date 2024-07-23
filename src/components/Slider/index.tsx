import React, { useMemo } from 'react';
import { slides, strings } from '../../constants';

import styles from './index.module.css';

interface Props {
  activeSlide: string;
}

const Slider: React.FC<Props> = ({ activeSlide }) => {
  const slide = useMemo(() => slides[activeSlide], [activeSlide]);

  return (
    <div className={styles.slider__container}>
      <div className={styles.slider__contentWrapper}>
        <div className={styles.slider__content}>{slide.showcase}</div>
      </div>
      <div className={styles.slider__contentWrapper}>
        <div className={styles.slider__content}>
          <div className={styles.slider__header}>{slide.headerText}</div>
          <div className={styles.slider__title}>{slide.titleText}</div>
          <div className={styles.slider__description}>
            {slide.descriptionText}
          </div>
          <button className={styles.slider__cta}>{strings.learnMore}</button>{' '}
        </div>
      </div>
    </div>
  );
};

export default Slider;
