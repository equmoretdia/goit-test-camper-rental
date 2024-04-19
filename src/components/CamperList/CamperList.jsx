import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CamperCard } from '../CamperCard/CamperCard';
// import campers from '../../db/campers.json';
import {
  selectItems,
  // selectError,
  // selectIsLoading,
} from '../../redux/selectors';
import { fetchCampers } from '../../redux/operations';
import { List } from './CamperListStyles';

export const CamperList = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const campers = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <List>
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
          form={camper.form}
          length={camper.length}
          width={camper.width}
          height={camper.height}
          tank={camper.tank}
          consumption={camper.consumption}
        />
      ))}
    </List>
  );
};
