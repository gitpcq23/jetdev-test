import React from 'react';
import HomeScreenView from './components/home-screen.view';
import {useHomeScreenHook} from './home-screen.hook';
export const HomeScreen = () => {
  const {
    isLoading,
    list,
    refreshing,
    isPagingStart,
    onEndReached,
    addFavorite,
    removeFavorite,
    favoriteReducerData,
    onRefresh,
  } = useHomeScreenHook();

  return (
    <HomeScreenView
      isLoading={isLoading}
      list={list}
      refreshing={refreshing}
      isPagingStart={isPagingStart}
      onEndReached={onEndReached}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      favoriteReducerData={favoriteReducerData}
      onRefresh={onRefresh}
    />
  );
};
