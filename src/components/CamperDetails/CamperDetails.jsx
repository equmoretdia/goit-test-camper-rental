import React, { useState } from 'react';

import { BookingForm } from '../BookingForm/BookingForm';
import { CamperFeatures } from '../CamperFeatures/CamperFeatures';
import { CamperReviews } from '../CamperReviews/CamperReviews';

export const CamperDetails = ({
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
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(true);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(true);
    setShowFeatures(false);
  };

  return (
    <>
      <h2>{name}</h2>
      <div>
        <p>{rating}</p>
        <p>({reviews.length} Reviews)</p>
        <p>{location}</p>
      </div>
      <p>{price}</p>
      <ul style={{ display: 'flex' }}>
        <li>
          <img
            alt={`camper: ${name}`}
            src={photo[0]}
            style={{ width: 290, height: 310 }}
          />
        </li>
        <li>
          <img
            alt={`camper: ${name}`}
            src={photo[1]}
            style={{ width: 290, height: 310 }}
          />
        </li>
        <li>
          <img
            alt={`camper: ${name}`}
            src={photo[2]}
            style={{ width: 290, height: 310 }}
          />
        </li>
      </ul>
      <p>{description}</p>
      <div>
        <button onClick={toggleFeatures}>Features</button>
        <button onClick={toggleReviews}>Reviews</button>
      </div>
      {showFeatures && (
        <div style={{ display: 'flex' }}>
          <CamperFeatures
            details={details}
            adults={adults}
            engine={engine}
            transmission={transmission}
            form={form}
            length={length}
            width={width}
            height={height}
            tank={tank}
            consumption={consumption}
          />
          <BookingForm />
        </div>
      )}
      {showReviews && (
        <div style={{ display: 'flex' }}>
          <CamperReviews reviews={reviews} />
          <BookingForm />
        </div>
      )}
    </>
  );
};
