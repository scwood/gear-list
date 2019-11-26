import React from 'react';
import Section from './Section';
import testData from './testData';

export default function SectionList() {
  return (
    <div>
      {testData.sectionOrder.map((sectionId) => {
        const section = testData.sections[sectionId];
        const items = section.itemIds.map((id) => testData.items[id]);
        return <Section key={sectionId} section={section} items={items} />;
      })}
    </div>
  );
}
