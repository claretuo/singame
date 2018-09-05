import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imgContainer: {
    position: 'relative'
  },
  img: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 26,
    height: 26,
    zIndex: 1
  }
});