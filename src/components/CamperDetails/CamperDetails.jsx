import React, { useState } from 'react';

import { BookingForm } from '../BookingForm/BookingForm';
import { CamperFeatures } from '../CamperFeatures/CamperFeatures';
import { CamperReviews } from '../CamperReviews/CamperReviews';
import { IconComponent } from '../IconComponent/IconComponent';
import {
  // Card,
  // ImgWrapper,
  // Img,
  // CardInfo,
  FirstRow,
  Header,
  CloseButton,

  // PriceFavorite,
  SecondRow,
  RatingBlock,
  RatingData,
  LocationBlock,
  LocationData,
  // Description,
  // FeatureBlock,
  // Feature,
  // ShowMore,
} from './CamperDetailsStyles';

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
  closeModal,
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
      <FirstRow>
        <Header>{name}</Header>
        <CloseButton type="button" onClick={closeModal}>
          <IconComponent
            id="#modal-close"
            width={32}
            height={32}
            stroke="var(--main)"
            strokeWidth={3}
            fill="none"
          />
        </CloseButton>
      </FirstRow>
      <SecondRow>
        <RatingBlock>
          <IconComponent
            id="#star"
            width={16}
            height={16}
            stroke="var(--rating)"
            strokeWidth={0}
            fill="var(--rating)"
          />
          <RatingData>
            {rating}({reviews.length} Reviews)
          </RatingData>
        </RatingBlock>
        <LocationBlock>
          <IconComponent
            id="#icon-map-pin"
            width={16}
            height={16}
            stroke="var(--main)"
            strokeWidth={1.3}
            fill="none"
          />
          <LocationData>{location}</LocationData>
        </LocationBlock>
      </SecondRow>
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
