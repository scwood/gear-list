import React, { useState } from "react";
import SectionView from "./SectionView";
import testData from "../testData";
import GearListItem from "../dataObjects/GearListItem";

const GearList: React.FC = () => {
  const [state, setState] = useState({ ...testData });

  function onAddItemRow(sectionId: string): GearListItem {
    const newItemId = String(Math.random() * 100);
    const newItem = {
      id: newItemId,
      name: "",
      description: "",
      quantity: 0,
      weight: 0,
      unit: "ounce"
    };
    const items = {
      ...state.items,
      [newItemId]: newItem
    };

    const sections = {
      ...state.sections,
      [sectionId]: {
        ...state.sections[sectionId],
        itemIds: [...state.sections[sectionId].itemIds, newItemId]
      }
    };

    setState({ ...state, sections, items });
    return newItem;
  }

  return (
    <div>
      {state.sectionOrder.map(sectionId => {
        const section = state.sections[sectionId];
        const items = section.itemIds.map(id => state.items[id]);
        return (
          <SectionView
            onAddItemRow={onAddItemRow}
            key={sectionId}
            section={section}
            items={items}
          />
        );
      })}
    </div>
  );
};

export default GearList;
