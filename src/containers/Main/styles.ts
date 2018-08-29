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
  wrapper: {
    height: 214
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});