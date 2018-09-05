import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
interface IProps {
  uri?: string;
  useDefault?: boolean;
  circle?: boolean;
  border?: number;
  editable?: boolean;
  size?: number;
  borderColor?: string;
}
export default class Avatar extends React.Component<IProps, {}> {
  public render() {
    const { uri, useDefault, circle, border, editable, size, borderColor } = this.props;
    const source = uri ? {
      uri
    } : require('../../resources/timg.jpeg');
    if (!uri && !useDefault) {
      return null;
    }
    const computedRadius = size ? size / 2 : 32;
    return (
      <View style={[styles.imgContainer, {
        width: size ? size : 64,
        height: size ? size : 64,
      }]}>
        <Image style={[styles.img, {
          borderWidth: border ? border : 0,
          borderRadius: circle ? computedRadius : 0,
          borderColor: borderColor ? borderColor : '#fff',
          width: size ? size : 64,
          height: size ? size : 64,
        }]} source={source} />
        {
          editable ?
            <Image style={styles.editIcon} source={require('../../resources/photo.png')} />
            : null
        }
      </View>
    );
  }
}
