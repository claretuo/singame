import React from 'react';
import { Text, View, TouchableOpacity, Image, Animated, ScrollView } from 'react-native';
import { i18n } from '../../i18n';
import { NavigationInjectedProps } from 'react-navigation';
import styles from './styles';
import Avatar from '../../components/Avatar/index';
import GameIcon from '../../components/GameIcon/index';
import GiftItem from '../../components/GiftItem/index';

interface IState {
  gameVisible: boolean;
  rotation: Animated.Value;
  gameHeight: Animated.Value;
  activeGameId: number;
}

export default class Profile extends React.Component<NavigationInjectedProps, IState> {
  static navigationOptions = () => {
    return {
      tabBarLabel: i18n.t('router.profile')
    };
  }
  constructor(props: NavigationInjectedProps) {
    super(props);
    this.state = {
      gameVisible: false,
      rotation: new Animated.Value(0),
      gameHeight: new Animated.Value(0),
      activeGameId: 0
    };
  }
  goUserInfo = () => {
    console.log('will navigate to userinfo');
    this.props.navigation.navigate('UserInfo');
  }
  goWallet = () => {
    console.log('will navigate to wallet');
    this.props.navigation.navigate('Wallet');
  }
  toggleGame = () => {
    const self = this;
    Animated.parallel([
      Animated.timing(self.state.rotation, {
        toValue: self.state.gameVisible ? 0 : 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(self.state.gameHeight, {
        toValue: self.state.gameVisible ? 0 : 1,
        duration: 500,
        useNativeDriver: false
      }),
    ]).start(() => {
      self.setState({
        gameVisible: !self.state.gameVisible,
        activeGameId: self.state.activeGameId || 1
      });
    });
  }
  changeActive = (activeGameId: number) => {
    this.setState({
      activeGameId
    });
  }
  goToGift = (activeGameId: number) => {
    console.log('will go to gift', activeGameId);
  }
  public render() {
    console.log('game icon ', GameIcon);
    return (
      <View style={styles.container}>
        <ScrollView>
            <TouchableOpacity style={styles.userInfo} onPress={this.goUserInfo}>
              <View style={styles.flex}>
                <View style={[styles.flex, styles.horizontal]}><Text style={styles.infoTxt}>smith tuo</Text></View>
                <View style={[styles.flex, styles.horizontal]}><Text style={styles.infoTxt}>17718354404</Text></View>
              </View>
              <View style={[styles.flex, styles.flexEnd]}>
                <Avatar useDefault circle border={3} editable />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userInfo} onPress={this.goWallet}>
              <Image style={[styles.settingIcon]} source={require('../../resources/wallet.png')} />
              <View style={styles.flex}>
                <Text style={styles.settingTxt}>{i18n.t('profile.wallet')}</Text>
              </View>
              <View style={[styles.flex, styles.flexEnd]}>
                <Image style={styles.arrow} source={require('../../resources/arrow-right.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userInfo} onPress={this.toggleGame}>
              <Image style={[styles.settingIcon]} source={require('../../resources/wallet.png')} />
              <View style={styles.flex}>
                <Text style={styles.settingTxt}>{i18n.t('profile.myGames')}</Text>
              </View>
              <View style={[styles.flex, styles.flexEnd]}>
                <Animated.Image style={[styles.dropDown, {
                  transform: [
                    {
                      rotate: this.state.rotation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                      })
                    }
                  ]
                }]} source={require('../../resources/drop-down.png')} />
              </View>
            </TouchableOpacity>
            <Animated.View style={[styles.gameContainer, {
              height: this.state.gameHeight.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 420]
              }),
              marginVertical: this.state.gameHeight.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 15]
              }),
              borderWidth: this.state.gameVisible ? 1 : 0
            }]}>
              <View style={styles.gameList}>
                <ScrollView horizontal>
                  <GameIcon name="test" useDefault isActive={this.state.activeGameId === 1} onSelect={this.changeActive} />
                  <GameIcon name="test" useDefault isActive={this.state.activeGameId === 2} onSelect={this.changeActive} />
                  <GameIcon name="test" useDefault isActive={this.state.activeGameId === 3} onSelect={this.changeActive} />
                  <GameIcon name="test" useDefault isActive={this.state.activeGameId === 4} onSelect={this.changeActive} />
                  <GameIcon name="test" useDefault isActive={this.state.activeGameId === 5} onSelect={this.changeActive} />
                  <GameIcon name="test" useDefault isActive={this.state.activeGameId === 6} onSelect={this.changeActive} />
                </ScrollView>
              </View>
              <View style={styles.gameContent}>
                <GiftItem title="title" content="test content dajklsdlasdhaskdh" onSelect={this.goToGift} />
                <GiftItem title="title" content="test content dajklsdlasdhaskdh" onSelect={this.goToGift} />
                <GiftItem title="title" content="test content dajklsdlasdhaskdh" onSelect={this.goToGift} />
                <GiftItem title="title" content="test content dajklsdlasdhaskdh" onSelect={this.goToGift} />
                <GiftItem title="title" content="test content dajklsdlasdhaskdh" onSelect={this.goToGift} />
              </View>
            </Animated.View>
            <TouchableOpacity style={styles.userInfo} onPress={this.goWallet}>
              <Image style={[styles.settingIcon]} source={require('../../resources/wallet.png')} />
              <View style={styles.flex}>
                <Text style={styles.settingTxt}>{i18n.t('profile.settings')}</Text>
              </View>
              <View style={[styles.flex, styles.flexEnd]}>
                <Image style={styles.arrow} source={require('../../resources/arrow-right.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userInfo} onPress={this.goWallet}>
              <Image style={[styles.settingIcon]} source={require('../../resources/wallet.png')} />
              <View style={styles.flex}>
                <Text style={styles.settingTxt}>{i18n.t('profile.helpAndFeedback')}</Text>
              </View>
              <View style={[styles.flex, styles.flexEnd]}>
                <Image style={styles.arrow} source={require('../../resources/arrow-right.png')} />
              </View>
            </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}