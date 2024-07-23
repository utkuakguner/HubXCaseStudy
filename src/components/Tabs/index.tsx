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
      {Object.values(slides).map((slide) => {
        const isActive = activeSlide === slide.key;

        return (
          <div
            key={slide.key}
            className={classNames(
              styles.tabs__tab,
              isActive && styles.tabs__tabActive,
            )}
            onClick={() => setActiveSlide(slide.key)}
          >
            <div
              className={classNames(
                styles.tabs__tabIcon,
                isActive && styles.tabs__tabIconActive,
              )}
            >
              <div className={classNames(styles.tabs__tabIconInside)}>
                {slide.icon}
              </div>
            </div>
            <div className={styles.tabs__tabLabel}>{slide.tabText}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
