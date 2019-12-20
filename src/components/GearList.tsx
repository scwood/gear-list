import React from 'react';
import SectionView from './SectionView';
import testData from '../testData';

const GearList: React.FC = () => {
  return (
    <div>
      {testData.sectionOrder.map((sectionId) => {
        const section = testData.sections[sectionId];
        const items = section.itemIds.map((id) => testData.items[id]);
        return <SectionView key={sectionId} section={section} items={items} />;
      })}
    </div>
  );
};

export default GearList;
