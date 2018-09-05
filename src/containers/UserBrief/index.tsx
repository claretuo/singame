import * as React from 'react';
import { NavigationInjectedProps, NavigationScreenProp } from 'react-navigation';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { i18n } from '../../i18n';
import styles from './styles';

export default class UserBrief extends React.Component<NavigationInjectedProps, {}> {
  static navigationOptions = ({ navigation }: { navigation: any}) => {
    const { state } = navigation;
    return {
      headerTitle: i18n.t('userBrief.title'),
      headerRight: (<TouchableOpacity style={styles.rightBtn} onPress={state.params ? state.params.save : null}>
        <Image style={styles.headerIcon} source={require('../../resources/confirm.png')} />
        </TouchableOpacity>)
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      save: this.save
    });
  }
  userBriefChange = (userBrief: string) => {
    console.log('userBrief', userBrief);
  }
  save = () => {
    console.log('will save userBrief');
  }
  public render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={70}
          style={styles.input}
          placeholder={i18n.t('userBrief.placeholder')}
          onChangeText={this.userBriefChange}
        />
        <View>
          <Text style={styles.txt}>
            您可以给自己添加一些简介。任何人在打开您的个人信息后将会看到这个简介。
          </Text>
        </View>
      </View>
    );
  }
}