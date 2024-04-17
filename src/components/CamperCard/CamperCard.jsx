import React from 'react';

export const CamperCard = ({
  name,
  price,
  rating,
  location,
  adults,
  engine,
  transmission,
  description,
  details,
  photo,
  reviews,
}) => {
  return (
    <li style={{ display: 'flex' }}>
      <img
        alt={`camper: ${name}`}
        src={photo[0]}
        style={{ width: 290, height: 310 }}
      />
      <div>
        <div>
          <div>
            <h2>{name}</h2>
            <p>{price}</p>
          </div>
          <div>
            <p>{rating}</p>
            <p>{reviews.length}</p>
            <p>{location}</p>
          </div>
        </div>
        <p>{description}</p>
        <ul>
          {Object.entries(details).map(([key, value]) => {
            if (typeof value === 'number' && value === 0) {
              return null; // Skip rendering if the value is 0
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
        <button style={{ width: 155, height: 56 }}>Show more</button>
      </div>
    </li>
  );
};
