import React from 'react';
import GearListSection from '../dataObjects/GearListSection';
import GearListItem from '../dataObjects/GearListItem';

interface SectionViewProps {
  section: GearListSection;
  items: GearListItem[];
}

const SectionView: React.FC<SectionViewProps> = (props: SectionViewProps) => {
  return (
    <div className="fl w-100">
      <div className="fl w-100">
        <h1>{props.section.name}</h1>
      </div>
      {props.items.map((item) => {
        return (
          <div className="fl pa2 w-100 bb" key={item.id}>
            <div className="fl w-30">{item.name}</div>
            <div className="fl w-40">{item.description}</div>
            <div className="fl w-10">{item.quantity}</div>
            <div className="fl w-10">{item.weight}</div>
            <div className="fl w-10">{item.unit}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionView;
