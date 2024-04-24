import React from 'react';

import { CamperCard } from '../CamperCard/CamperCard';

export const FavoriteList = ({ favorites }) => {
  return (
    <ul>
      {favorites?.map(favorite => (
        <CamperCard
          key={favorite._id}
          //   id={camper._id}
          camper={favorite}
        />
      ))}
    </ul>
  );
};
