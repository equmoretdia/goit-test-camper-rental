import React from 'react';

import { CamperCard } from '../CamperCard/CamperCard';

export const FavoriteList = ({ favorites }) => {
  return (
    <ul>
      {favorites.map(favorite => (
        <CamperCard
          key={favorite._id}
          //   id={camper._id}
          name={favorite.name}
          price={favorite.price}
          rating={favorite.rating}
          location={favorite.location}
          adults={favorite.adults}
          engine={favorite.engine}
          transmission={favorite.transmission}
          description={favorite.description}
          details={favorite.details}
          photo={favorite.gallery}
          reviews={favorite.reviews}
          form={favorite.form}
          length={favorite.length}
          width={favorite.width}
          height={favorite.height}
          tank={favorite.tank}
          consumption={favorite.consumption}
        />
      ))}
    </ul>
  );
};
