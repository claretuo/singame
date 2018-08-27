import { StyleSheet } from 'react-native';
import { gScreen } from '../../utils/GlobalContants';
const [aWidth, aHeight] = [gScreen.width, 214];
const [left, bottom] = [0, 0];
export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: gScreen.width,
    height: aHeight,
    left: left,
    bottom: bottom,
  },
  mask: {
    justifyContent: 'center',
    backgroundColor: '#383838',
    opacity: 0.8,
    position: 'absolute',
    width: gScreen.width,
    height: aHeight,
    left: left,
    bottom: bottom,
  },
  tip: {
    width: aWidth,
    height: aHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tipTitleView: {
    height: 53,
    width: aWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#f0f0f0',
  },
  btn: {
    height: 53,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelText: {
    color: '#e6454a',
    fontSize: 16,
  },
  okText: {
    color: '#e6454a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    justifyContent: 'center',
    height: aHeight - 53, // Picker 默认高度
    width: aWidth,
  },
  itempicker: {
    color: '#e6454a',
    fontSize: 19
  }
});