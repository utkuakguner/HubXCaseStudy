import './index.css';

import React from 'react';
import classNames from 'classnames';
import { slides } from '../../constants';

interface Props {
  activeSlide: string;
  setActiveSlide: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<Props> = ({ activeSlide, setActiveSlide }) => {
  return (
    <div className="tabs-container">
      {Object.values(slides).map((slide) => {
        const isActive = activeSlide === slide.key;

        return (
          <div
            key={slide.key}
            className={classNames('tabs-tab', isActive && 'tabs-tab-active')}
            onClick={() => setActiveSlide(slide.key)}
          >
            <div
              className={classNames(
                'tabs-tab-icon',
                isActive && 'tabs-tab-icon-active',
              )}
            >
              <div className="tabs-tab-icon-inside">{slide.icon}</div>
            </div>
            <div className="tabs-tab-label">{slide.tabText}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
