import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {
  horizontalScale,
  scaledWidth,
  verticalScale,
} from '../../../utils/scaling';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  noFavorites: {
    fontSize: verticalScale(20),
    fontWeight: '600',
    color: colors.textBlack,
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  listItemContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: scaledWidth(5),
    paddingRight: scaledWidth(5),
    paddingVertical: verticalScale(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCircle: {
    height: horizontalScale(40),
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 45,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  nameView: {
    marginLeft: scaledWidth(5),
    paddingRight: scaledWidth(1),
    flex: 1,
  },
  addressWrapper: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: verticalScale(20),
    fontWeight: '600',
    color: colors.textBlack,
  },
  subTitle: {
    fontSize: verticalScale(16),
    fontWeight: '400',
    color: colors.gray,
  },
  starIconContainer: {
    paddingRight: 20,
  },
  separator: {
    backgroundColor: colors.gray,
    opacity: 0.3,
    height: 0.5,
    marginVertical: verticalScale(5),
  },
  listView: {
    marginTop: verticalScale(0),
    flex: 1,
    paddingTop: verticalScale(10),
  },
});
