import React, { useState } from 'react';

import { Modal } from '../Modal/Modal';
import { CamperDetails } from '../CamperDetails/CamperDetails';
import { IconComponent } from '../IconComponent/IconComponent';
import {
  Card,
  ImgWrapper,
  Img,
  CardInfo,
  FirstRow,
  Header,
  PriceFavorite,
  HeartButton,
  SecondRow,
  RatingBlock,
  RatingData,
  LocationBlock,
  LocationData,
  Description,
  FeatureBlock,
  Feature,
  ShowMore,
} from './CamperCardStyles';
import ac from '../../images/ac.svg';

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
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  return (
    <>
      <Card>
        <ImgWrapper>
          <Img alt={`camper: ${name}`} src={photo[0]} />
        </ImgWrapper>
        <CardInfo>
          <div>
            <FirstRow>
              <Header>{name}</Header>
              <PriceFavorite>
                <Header>&#8364;{price.toFixed(2)}</Header>
                <HeartButton type="button">
                  <IconComponent
                    id="#heart"
                    width={24}
                    height={24}
                    stroke="var(--main)"
                    strokeWidth={2.3}
                    fill="none"
                  />
                </HeartButton>
              </PriceFavorite>
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
          </div>
          <Description>{description}</Description>
          <FeatureBlock>
            <Feature key={adults}>
              <IconComponent
                id="#people"
                width={20}
                height={20}
                stroke="none"
                strokeWidth={0}
                fill="var(--main)"
              />
              <span>{adults} adults</span>
            </Feature>
            <Feature key={engine}>
              <IconComponent
                id="#petrol"
                width={20}
                height={20}
                stroke="none"
                strokeWidth={0}
                fill="var(--main)"
              />
              <p>{engine}</p>
            </Feature>
            <Feature key={transmission}>
              <IconComponent
                id="#transmission"
                width={20}
                height={20}
                stroke="none"
                strokeWidth={0}
                fill="var(--main)"
              />
              <p>{transmission}</p>
            </Feature>
            {Object.entries(details).map(([key, value]) => {
              if (
                (typeof value === 'number' && value === 0) ||
                (typeof value === 'string' && value.trim() === '')
              ) {
                return null;
              } else {
                if (key === 'airConditioner') {
                  return (
                    <Feature key={key}>
                      <svg width="20" height="20">
                        <use
                          href={ac}
                          stroke="black"
                          stroke-width="1"
                          fill="black"
                        ></use>
                      </svg>
                      <p>AC</p>
                    </Feature>
                  );
                } else {
                  return (
                    <Feature key={key}>
                      <IconComponent
                        id={`#${key}`}
                        width={20}
                        height={20}
                        stroke="none"
                        strokeWidth={0}
                        fill="var(--main)"
                      />
                      <p>
                        {value} {key}
                      </p>
                    </Feature>
                  );
                }
              }
            })}
          </FeatureBlock>
          <ShowMore type="button" onClick={toggleModal}>
            Show more
          </ShowMore>
        </CardInfo>
      </Card>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <CamperDetails
            name={name}
            price={price}
            rating={rating}
            location={location}
            adults={adults}
            engine={engine}
            transmission={transmission}
            description={description}
            details={details}
            photo={photo}
            reviews={reviews}
            form={form}
            length={length}
            width={width}
            height={height}
            tank={tank}
            consumption={consumption}
            closeModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};
