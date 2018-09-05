import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import styles from './styles';
import { i18n } from '../../i18n';
import Avatar from '../../components/Avatar/index';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: i18n.t('imagePicker.title'),
  takePhotoButtonTitle: i18n.t('imagePicker.takePhotoButtonTitle'),
  chooseFromLibraryButtonTitle: i18n.t('imagePicker.chooseFromLibraryButtonTitle'),
  cancelButtonTitle: i18n.t('imagePicker.cancelButtonTitle'),
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class UserInfo extends React.Component<NavigationInjectedProps, {}> {
  static navigationOptions = () => {
    return {
      headerTitle: i18n.t('userInfo.title')
    };
  }
  constructor(props: NavigationInjectedProps) {
    super(props);
  }
  setAvatar = () => {
    console.log('image picker', ImagePicker);
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log('source', source);
      }
    });
  }
  goUsernameSet = () => {
    console.log('go update username');
    this.props.navigation.navigate('UsernameUpdate');
  }
  goCertification = () => {
    console.log('go update certification');
    this.props.navigation.navigate('Certification');
  }
  goBrief = () => {
    console.log('go update brief');
    this.props.navigation.navigate('UserBrief');
  }
  /**
   * render
   */
  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={this.setAvatar}>
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.txt}>{i18n.t('userInfo.avatar')}</Text>
          </View>
          <View style={styles.contentBox}>
            <Avatar useDefault circle border={1} borderColor="#a5d63f" size={25} />
            <Image style={styles.right} source={require('../../resources/right.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={this.goUsernameSet}>
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.txt}>{i18n.t('userInfo.username')}</Text>
          </View>
          <View style={styles.contentBox}>
            <Text numberOfLines={1} style={styles.txt}>Smith Tuo</Text>
            <Image style={styles.right} source={require('../../resources/right.png')} />
          </View>
        </TouchableOpacity>
        <View style={styles.box}>
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.txt}>{i18n.t('userInfo.phone')}</Text>
          </View>
          <View style={styles.contentBox}>
            <Text numberOfLines={1} style={styles.txt}>17718354404</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.box} onPress={this.goCertification}>
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.txt}>{i18n.t('userInfo.certification')}</Text>
          </View>
          <View style={styles.contentBox}>
            <Text numberOfLines={1} style={styles.txt}>未登录</Text>
            <Image style={styles.right} source={require('../../resources/right.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={this.goBrief}>
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.txt}>{i18n.t('userInfo.brief')}</Text>
          </View>
          <View style={styles.contentBox}>
            <Text numberOfLines={1} style={styles.txt}>无</Text>
            <Image style={styles.right} source={require('../../resources/right.png')} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}