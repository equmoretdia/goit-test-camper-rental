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
      {campers?.map(camper => (
        <CamperCard key={camper._id} camper={camper} />
      ))}
    </List>
  );
};
