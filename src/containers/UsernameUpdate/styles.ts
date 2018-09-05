import { gScreen } from '../../utils/GlobalContants';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    width: gScreen.width,
    height: gScreen.height - 64 - 49,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  input: {
    width: gScreen.width - 20,
    height: 32,
    fontSize: 14,
    color: '#505050',
    borderColor: '#999',
    borderBottomWidth: 1
  },
  tip: {
  },
  txt: {
    fontSize: 14,
    lineHeight: 30,
    textAlign: 'justify'
  },
  rightBtn: {
    width: 20,
    height: 12,
    marginRight: 9
  },
  headerIcon: {
    width: 20,
    height: 12
  }
});