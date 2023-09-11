import React from 'react';
import {Image, ImageStyle, StyleSheet, View} from 'react-native';
import {horizontalScale, verticalScale} from '../utils/scaling';
import {colors} from '../utils/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ViewStyle} from 'react-native';
import {APP_ICON_SMALL} from '../assets';

export const Header = (): React.ReactElement => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.headerView,
        paddingTop: insets.top + verticalScale(5),
      }}>
      <Image style={styles.headerImage} source={APP_ICON_SMALL} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: horizontalScale(15),
    aspectRatio: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: colors.white,
  } as ImageStyle,
  headerView: {
    width: '100%',
    backgroundColor: colors.white,
    paddingBottom: verticalScale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(5),
    },
    shadowOpacity: 0.1,
    shadowRadius: verticalScale(5),
    elevation: 6,
  } as ViewStyle,
});
