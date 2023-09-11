import {UserDTO} from '../../redux/manage-favorites/types';

export type IHomeScreenProps = {
  isLoading: boolean;
  list: UserDTO[];
  refreshing: boolean;
  isPagingStart: boolean;
  onEndReached: () => void;
  addFavorite: (item: UserDTO) => void;
  removeFavorite: (item: UserDTO) => void;
  favoriteReducerData: any;
  onRefresh: () => void;
};
