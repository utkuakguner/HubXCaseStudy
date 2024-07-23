import './index.css';

import React from 'react';
import showcase1 from '../../assets/advancedFiltersShowcase1.png';
import showcase2 from '../../assets/advancedFiltersShowcase2.png';
import showcase3 from '../../assets/advancedFiltersShowcase3.png';

const AdvancedFilters: React.FC = () => {
  return (
    <>
      <img src={showcase1} className="advanced-filters-showcase1" />
      <img src={showcase2} className="advanced-filters-showcase2" />
      <img src={showcase3} className="advanced-filters-showcase3" />
    </>
  );
};

export default AdvancedFilters;
