import { gScreen } from '../../utils/GlobalContants';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    marginTop: 20,
    width: gScreen.width,
    height: gScreen.height - 20 - 45,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#999',
    paddingHorizontal: gScreen.width * 0.05
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  flex: {
    flex: 1,
    justifyContent: 'center'
  },
  flexEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  infoTxt: {
    color: 'rgba(80, 80, 80, 1)',
    fontSize: 12
  },
  settingIcon: {
    width: 25,
    height: 25,
    marginRight: 50
  },
  settingTxt: {
    color: 'rgba(80, 80, 80, 1)',
    fontSize: 15
  },
  arrow: {
    width: 15,
    height: 15
  },
  dropDown: {
    width: 20,
    height: 20
  },
  gameContainer: {
    width: gScreen.width * 0.9,
    borderColor: '#999',
    borderRadius: 4,
    marginHorizontal: gScreen.width * 0.05,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'hidden'
  },
  gameList: {
    width: gScreen.width * 0.9,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  gameContent: {
    width: gScreen.width * 0.9,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
});