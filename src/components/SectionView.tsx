import React, { useState } from "react";
import GearListSection from "../dataObjects/GearListSection";
import GearListItem from "../dataObjects/GearListItem";

interface SectionViewProps {
  section: GearListSection;
  items: GearListItem[];
}

const SectionView: React.FC<SectionViewProps> = (props: SectionViewProps) => {
  const items = useState([]);

  return (
    <div className="fl w-100 mb4">
      <h1 className="f3 mb2 ml1">{props.section.name}</h1>
      {props.items.map(item => {
        return (
          <div className="fl pa1 w-100 bb b--black-30" key={item.id}>
            <div className="fl w-30">{item.name}</div>
            <div className="fl w-40">{item.description}</div>
            <div className="fl w-10">{item.quantity}</div>
            <div className="fl w-10">{`${item.weight} ${item.unit}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionView;
