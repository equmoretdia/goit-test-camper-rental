import React, { useState } from 'react';

import { Modal } from '../Modal/Modal';
import { CamperDetails } from '../CamperDetails/CamperDetails';
import { IconComponent } from '../IconComponent/IconComponent';
import {
  Card,
  ImgWrapper,
  Img,
  CardInfo,
  FirstDiv,
  Header,
  PriceFavorite,
  HeartButton,
} from './CamperCardStyles';

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
            <FirstDiv>
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
            </FirstDiv>
            <div>
              <p>{rating}</p>
              <p>({reviews.length} Reviews)</p>
              <p>{location}</p>
            </div>
          </div>
          <p>{description}</p>
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
          <button
            type="button"
            onClick={toggleModal}
            style={{ width: 155, height: 56 }}
          >
            Show more
          </button>
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
          />
        </Modal>
      )}
    </>
  );
};
