import React from 'react';
import FavoriteView from './components/favorite-screen.view';
import {useFavoriteScreenHook} from './favorite-screen.hooks';

export const FavoriteScreen = () => {
  const {favoriteList, unFavoriteUser} = useFavoriteScreenHook();
  return (
    <FavoriteView
      favoriteList={favoriteList || []}
      unFavoriteUser={unFavoriteUser}
    />
  );
};
