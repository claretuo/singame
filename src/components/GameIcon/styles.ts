import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imgContainer: {
    paddingVertical: 10,
    width: 75,
    height: 100,
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderColor: '#fff',
    borderRadius: 14
  },
  name: {
    width: 75,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 12,
    color: '#505050'
  }
});