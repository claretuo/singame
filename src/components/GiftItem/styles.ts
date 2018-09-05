import { gScreen } from './../../utils/GlobalContants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imgContainer: {
    paddingVertical: 10,
    marginHorizontal: gScreen.width * 0.05,
    width: gScreen.width * 0.8,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#999',
    marginVertical: 10
  },
  img: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 14,
    marginRight: 10
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
  },
  content: {
  },
  txt: {
    fontSize: 12,
    color: '#505050'
  }
});