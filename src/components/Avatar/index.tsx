import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
interface IProps {
  uri?: string;
  useDefault: boolean;
  circle?: boolean;
  border?: boolean;
}
export default class Avatar extends React.Component<IProps, {}> {
  public render() {
    const { uri, useDefault, circle, border } = this.props;
    const source = uri ? {
      uri
    } : require('../../resources/timg.jpeg');
    if (!uri && !useDefault) {
      return null;
    }
    return (
      <Image style={[styles.imgContainer, { borderWidth: border ? 1 : 0, borderRadius: circle ? 32 : 0 } ]} source={source} />
    );
  }
}
