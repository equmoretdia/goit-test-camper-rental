import React from 'react';

export const CamperFeatures = ({
  details,
  adults,
  engine,
  transmission,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  return (
    <div>
      <ul>
        {Object.entries(details).map(([key, value]) => {
          if (
            (typeof value === 'number' && value === 0) ||
            (typeof value === 'string' && value.trim() === '')
          ) {
            return null;
          }
          return (
            <li key={key}>
              {key}: {value}
            </li>
          );
        })}
        <li key={adults}>adults: {adults}</li>
        <li key={engine}>engine: {engine}</li>
        <li key={transmission}>transmission: {transmission}</li>
      </ul>
      <h3>Vehicle details</h3>
      <ul>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Form</p>
          <p>{form}</p>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Lenght</p>
          <p>{length}</p>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Width</p>
          <p>{width}</p>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Height</p>
          <p>{height}</p>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Tank</p>
          <p>{tank}</p>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
};
