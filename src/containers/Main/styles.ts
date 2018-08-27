import { gScreen } from '../../utils/GlobalContants';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: gScreen.width,
    height: gScreen.height,
    minHeight: 70,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#555',
    fontSize: 17
  }
});