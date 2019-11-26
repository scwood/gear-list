import React from 'react';
import propTypes from 'prop-types';

Section.propTypes = {
  section: propTypes.object.isRequired,
  items: propTypes.array.isRequired,
};

export default function Section({section, items}) {
  return (
    <div className="fl w-100">
      <div className="fl w-100">
        <h1>{section.name}</h1>
      </div>
      {items.map((item) => {
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
}
