import React from 'react';
import { useSelector } from 'react-redux';

import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { selectFavorites } from '../redux/selectors';
import { Section, HiddenHeader } from './PageStyles';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Section>
      <HiddenHeader>Favorites</HiddenHeader>
      {favorites.length > 0 ? (
        <FavoriteList favorites={favorites} />
      ) : (
        <p>You didn't selected any favorites yet</p>
      )}
    </Section>
  );
};

export default Favorites;
