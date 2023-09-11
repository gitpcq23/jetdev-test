import * as React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './favorite-screen.style';
import {UserDTO} from '../../../redux/manage-favorites/types';
import {FavoriteListItemComponent} from './favorite-list-item.component';
import {Text} from 'react-native';
import {ErrorMessages} from '../../../utils/constant';
import {IFavoriteProps} from '../favorite-screen.props';

const FavoriteScreen = (props: IFavoriteProps) => {
  const {favoriteList, unFavoriteUser} = props;

  const renderItem = (item: UserDTO) => {
    return (
      <FavoriteListItemComponent
        item={item}
        removeFromFavorite={unFavoriteUser}
      />
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.listView}>
        <FlatList
          data={favoriteList}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={() => <SeparatorComponent />}
          ListEmptyComponent={() => (
            <Text style={styles.noFavorites}>{ErrorMessages.NO_FAVORITES}</Text>
          )}
        />
      </View>
    </View>
  );
};

const SeparatorComponent = () => <View style={styles.separator} />;

export default FavoriteScreen;
