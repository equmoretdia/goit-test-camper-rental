import React, { useState } from 'react';

import { BookingForm } from '../BookingForm/BookingForm';
import { CamperFeatures } from '../CamperFeatures/CamperFeatures';
import { CamperReviews } from '../CamperReviews/CamperReviews';
import { IconComponent } from '../IconComponent/IconComponent';
import {
  HeaderRow,
  Header,
  CloseButton,
  InfoBlock,
  MainBlock,
  SecondRow,
  RatingBlock,
  RatingData,
  LocationBlock,
  LocationData,
  Gallery,
  ImgWrapper,
  Img,
  Description,
  // FeatureBlock,
  // Feature,
  FRContainer,
  FeaturesReviews,
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
      <HeaderRow>
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
      </HeaderRow>
      <InfoBlock>
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
        <Header>&#8364;{price.toFixed(2)}</Header>
      </InfoBlock>
      <MainBlock>
        <Gallery>
          <ImgWrapper>
            <Img alt={`camper: ${name}`} src={photo[0]} />
          </ImgWrapper>
          <ImgWrapper>
            <Img alt={`camper: ${name}`} src={photo[1]} />
          </ImgWrapper>
          <ImgWrapper>
            <Img alt={`camper: ${name}`} src={photo[2]} />
          </ImgWrapper>
        </Gallery>
        <Description>{description}</Description>
        <FRContainer>
          <FeaturesReviews onClick={toggleFeatures} active={showFeatures}>
            Features
          </FeaturesReviews>
          <FeaturesReviews onClick={toggleReviews} active={showReviews}>
            Reviews
          </FeaturesReviews>
        </FRContainer>
        {showFeatures && (
          <div style={{ display: 'flex', gap: '24px', paddingTop: '44px' }}>
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
          <div style={{ display: 'flex', gap: '24px', paddingTop: '44px' }}>
            <CamperReviews reviews={reviews} />
            <BookingForm />
          </div>
        )}
      </MainBlock>
    </>
  );
};
