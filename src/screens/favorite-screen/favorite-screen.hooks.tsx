import {useDispatch, useSelector} from 'react-redux';
import {UserDTO} from '../../redux/manage-favorites/types';
import {unFavorite} from '../../redux/manage-favorites/favorite.actions';
import {AnyAction} from 'redux';
import {IFavoriteProps} from './favorite-screen.props';
import {RootState} from '../../redux/root-reducer';

export const useFavoriteScreenHook = (): IFavoriteProps => {
  const favoriteList = useSelector(
    (state: RootState) => state.favoriteReducer.favoriteItems,
  );

  const dispatch = useDispatch();

  const unFavoriteUser = (item: UserDTO) => {
    dispatch(unFavorite(item) as unknown as AnyAction);
  };

  return {
    unFavoriteUser,
    favoriteList,
  };
};
