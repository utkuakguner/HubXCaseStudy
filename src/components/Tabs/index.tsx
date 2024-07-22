import React from 'react';
import classNames from 'classnames';
import { slides } from '../../constants';
import styles from './index.module.css';

interface Props {
  activeSlide: string;
  setActiveSlide: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<Props> = ({ activeSlide, setActiveSlide }) => {
  return (
    <div className={styles.tabs__container}>
      {Object.values(slides).map((slide) => (
        <div
          key={slide.key}
          className={classNames(
            styles.tabs__tab,
            activeSlide === slide.key && styles.tabs__tabActive,
          )}
          onClick={() => setActiveSlide(slide.key)}
        >
          <div className={styles.tabs__tabIcon}>
          {slide.icon}
          </div>
          <div className={styles.tabs__tabLabel}>
          {slide.label}
          </div>
          </div>
      ))}
    </div>
  );
};

export default Tabs;
