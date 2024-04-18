import React from 'react';

export const CamperDetails = ({
  name,
  price,
  rating,
  location,
  description,
  photo,
  reviews,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <div>
        <p>{rating}</p>
        <p>({reviews.length} Reviews)</p>
        <p>{location}</p>
      </div>
      <p>{price}</p>
      <div style={{ display: 'flex' }}>
        <img
          alt={`camper: ${name}`}
          src={photo[0]}
          style={{ width: 290, height: 310 }}
        />
        <img
          alt={`camper: ${name}`}
          src={photo[1]}
          style={{ width: 290, height: 310 }}
        />
        <img
          alt={`camper: ${name}`}
          src={photo[2]}
          style={{ width: 290, height: 310 }}
        />
      </div>
      <p>{description}</p>
    </>
  );
};
