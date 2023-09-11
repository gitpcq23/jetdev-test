import React from 'react';
import {View, RefreshControl, ActivityIndicator, FlatList} from 'react-native';
import {styles} from './home-screen.style';
import {UserDTO} from '../../../redux/manage-favorites/types';
import UserListItem from './user-list-item';
import {IHomeScreenProps} from '../home-screen.props';

const Loader = () => <ActivityIndicator size={40} />;

const HomeScreen = (props: IHomeScreenProps) => {
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
  } = props;

  const renderItem = (item: UserDTO) => {
    return (
      <UserListItem
        item={item}
        addToFavorite={addFavorite}
        removeFromFavorite={removeFavorite}
        isFavorite={favoriteReducerData?.includes(item)}
      />
    );
  };
  const renderFooter = () => (
    <View style={styles.footerText}>{isPagingStart && <Loader />}</View>
  );

  return (
    <View style={styles.mainView}>
      <View style={styles.listView}>
        <FlatList
          data={list}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.email}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={() =>
            isLoading ? (
              <View style={styles.loaderView}>
                <Loader />
              </View>
            ) : null
          }
          extraData={list}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.listContainerStyle}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
