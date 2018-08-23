import { Dimensions, Platform, PixelRatio } from 'react-native';

const isIOS = Platform.OS === 'ios';

export const gScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  navBarHeight: isIOS ? 64 : 50,
  navBarPaddingTop: isIOS ? 20 : 0,
  onePix: 1 / PixelRatio.get(),
};

export const gColors = {
  theme: 'rgb(217, 51, 58)',
  background: '#f5f5f5',
  border: '#d5d5d5',
  healthGreen: 'rgb(142, 213, 7)',
  healthYellow: 'rgb(254, 210, 10)',
  healthRed: 'rgb(251, 25, 8)'
};