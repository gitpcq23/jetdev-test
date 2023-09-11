import {useEffect, useState} from 'react';
import {
  addToFavorite,
  unFavorite,
} from '../../redux/manage-favorites/favorite.actions';
import {useDispatch, useSelector} from 'react-redux';
import {UserDTO} from '../../redux/manage-favorites/types';
import {AnyAction} from 'redux';
import {IHomeScreenProps} from './home-screen.props';
import {fetchUserListAPI} from '../../api/favorite.api';
import {Alert} from 'react-native';
import {DEFAULT_PAGING_COUNT} from '../../utils/constant';
import {RootState} from '../../redux/root-reducer';

export const useHomeScreenHook = (): IHomeScreenProps => {
  const favoriteReducerData = useSelector(
    (state: RootState) => state.favoriteReducer.favoriteItems,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState<UserDTO[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPagingStart, setIsPagingStart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserList(false, currentPage);
  }, []);

  const addFavorite = (item: any) => {
    dispatch(addToFavorite(item) as unknown as AnyAction);
  };
  const removeFavorite = (item: any) => {
    dispatch(unFavorite(item) as unknown as AnyAction);
  };

  const fetchUserList = async (isRefresh: boolean, pageNumber: number) => {
    isRefresh ? setIsRefreshing(true) : setIsLoading(true);
    const response = await fetchUserListAPI({
      pagingCount: DEFAULT_PAGING_COUNT,
      currentPage: pageNumber,
    });
    if (response.isSuccess) {
      setList(pageNumber === 1 ? response.data : [...list, ...response.data]);
    } else if (response.error) {
      Alert.alert(response.error);
    }
    setIsPagingStart(false);
    isRefresh ? setIsRefreshing(false) : setIsLoading(false);
  };

  const onEndReached = (): void => {
    if (isLoading || isPagingStart) {
      return;
    }
    const pageNo = currentPage + 1;
    setIsPagingStart(true);
    setCurrentPage(pageNo);
    setTimeout(() => {
      fetchUserList(false, pageNo);
    }, 1000);
  };

  const onRefresh = () => {
    setCurrentPage(1);
    setTimeout(() => {
      fetchUserList(false, 1);
    }, 1000);
  };

  return {
    isLoading,
    list: list,
    isRefreshing,
    isPagingStart,
    onEndReached,
    addFavorite,
    removeFavorite,
    favoriteReducerData,
    onRefresh,
  };
};
