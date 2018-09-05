import { gScreen } from '../../utils/GlobalContants';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    width: gScreen.width,
    height: gScreen.height - 64 - 49,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  box: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#999'
  },
  title: {
    width: 100,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingLeft: 10
  },
  txt: {
    fontSize: 12,
    color: '#505050'
  },
  contentBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  right: {
    width: 20,
    height: 20,
    marginLeft: 10
  }
});