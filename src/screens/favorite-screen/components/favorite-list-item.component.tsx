import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Image, View} from 'react-native';
import {UserDTO} from '../../../redux/manage-favorites/types';
import {styles} from './favorite-screen.style';
import {Icon} from '@rneui/themed';
import {horizontalScale} from '../../../utils/scaling';
import {colors} from '../../../utils/theme';

interface FavoriteProps {
  item: UserDTO;
  removeFromFavorite: (e: UserDTO) => void;
}

export const FavoriteListItemComponent = (props: FavoriteProps) => {
  return (
    <View style={styles.listItemContainer}>
      <Image
        style={styles.imageCircle}
        source={{
          uri: props.item?.picture?.medium,
        }}
      />
      <View style={styles.nameView}>
        <Text
          style={
            styles.title
          }>{`${props.item.name?.first} ${props.item.name?.last}`}</Text>
      </View>
      <View style={styles.starIconContainer}>
        <TouchableOpacity
          onPress={() => {
            props.removeFromFavorite(props.item);
          }}>
          <Icon
            name="star-fill"
            type="octicon"
            color={colors.primary}
            size={horizontalScale(24)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
