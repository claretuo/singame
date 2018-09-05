import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
interface IProps {
  uri?: string;
  title: string;
  content: string;
  onSelect: (activeGameId: number) => void;
}
export default class GiftItem extends React.Component<IProps, {}> {
  public render() {
    const { uri, content, title } = this.props;
    const source = uri ? {
      uri
    } : require('../../resources/timg.jpeg');
    return (
      <TouchableOpacity style={styles.imgContainer} onPress={this.props.onSelect.bind(this, 4)}>
        <Image style={styles.img} source={source} />
        <View style={styles.flex}>
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.txt}>{title}</Text>
          </View>
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.txt}>{content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
