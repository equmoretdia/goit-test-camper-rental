import React from 'react';

import { CamperCard } from '../CamperCard/CamperCard';
import campers from '../../db/campers.json';

export const CamperList = () => {
  return (
    <>
      <h1>CamperList</h1>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {campers.map(camper => (
          <CamperCard
            key={camper._id}
            //   id={camper._id}
            name={camper.name}
            price={camper.price}
            rating={camper.rating}
            location={camper.location}
            adults={camper.adults}
            engine={camper.engine}
            transmission={camper.transmission}
            description={camper.description}
            details={camper.details}
            photo={camper.gallery}
            reviews={camper.reviews}
          />
        ))}
      </ul>
    </>
  );
};
