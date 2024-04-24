import React from 'react';
import { useSelector } from 'react-redux';

import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { selectFavorites } from '../redux/selectors';
import { Header } from './PageStyles';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <section>
      <Header>Favorites</Header>
      {favorites.length > 0 ? (
        <FavoriteList favorites={favorites} />
      ) : (
        <p>You didn't selected any favorites yet</p>
      )}
    </section>
  );
};

export default Favorites;
