import React from 'react';

import { CamperCard } from '../CamperCard/CamperCard';
import campers from '../../db/campers.json';

export const CamperList = () => {
  return (
    <div>
      {campers.map(camper => (
        <CamperCard
          key={camper._id}
          id={camper._id}
          name={camper.name}
          number={camper.number}
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
    </div>
  );
};
