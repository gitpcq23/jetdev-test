import {UserDTO} from '../../redux/manage-favorites/types';

export type IFavoriteProps = {
  favoriteList: UserDTO[];
  unFavoriteUser: (item: UserDTO) => void;
};
