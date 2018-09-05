import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
interface IProps {
  uri?: string;
  useDefault?: boolean;
  name: string;
  isActive: boolean;
  onSelect: (activeGameId: number) => void;
}
export default class GameIcon extends React.Component<IProps, {}> {
  public render() {
    const { uri, useDefault, name, isActive } = this.props;
    const source = uri ? {
      uri
    } : require('../../resources/timg.jpeg');
    if (!uri && !useDefault) {
      return null;
    }
    return (
      <TouchableOpacity style={[styles.imgContainer, {
        backgroundColor: isActive ? '#eee' : 'transparent'
      }]} onPress={this.props.onSelect.bind(this, 4)}>
        <Image style={styles.img} source={source} />
        <View style={styles.name}>
          <Text numberOfLines={1} style={styles.txt}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
