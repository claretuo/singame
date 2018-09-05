"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const i18n_1 = require("../../i18n");
const styles_1 = __importDefault(require("./styles"));
const index_1 = __importDefault(require("../../components/Avatar/index"));
const index_2 = __importDefault(require("../../components/GameIcon/index"));
const index_3 = __importDefault(require("../../components/GiftItem/index"));
class Profile extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.goUserInfo = () => {
            console.log('will navigate to userinfo');
            this.props.navigation.navigate('UserInfo');
        };
        this.goWallet = () => {
            console.log('will navigate to wallet');
            this.props.navigation.navigate('Wallet');
        };
        this.toggleGame = () => {
            const self = this;
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(self.state.rotation, {
                    toValue: self.state.gameVisible ? 0 : 1,
                    duration: 500,
                    useNativeDriver: true
                }),
                react_native_1.Animated.timing(self.state.gameHeight, {
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
        };
        this.changeActive = (activeGameId) => {
            this.setState({
                activeGameId
            });
        };
        this.goToGift = (activeGameId) => {
            console.log('will go to gift', activeGameId);
        };
        this.state = {
            gameVisible: false,
            rotation: new react_native_1.Animated.Value(0),
            gameHeight: new react_native_1.Animated.Value(0),
            activeGameId: 0
        };
    }
    render() {
        console.log('game icon ', index_2.default);
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.ScrollView, null,
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.userInfo, onPress: this.goUserInfo },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.flex },
                        react_1.default.createElement(react_native_1.View, { style: [styles_1.default.flex, styles_1.default.horizontal] },
                            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.infoTxt }, "smith tuo")),
                        react_1.default.createElement(react_native_1.View, { style: [styles_1.default.flex, styles_1.default.horizontal] },
                            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.infoTxt }, "17718354404"))),
                    react_1.default.createElement(react_native_1.View, { style: [styles_1.default.flex, styles_1.default.flexEnd] },
                        react_1.default.createElement(index_1.default, { useDefault: true, circle: true, border: 3, editable: true }))),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.userInfo, onPress: this.goWallet },
                    react_1.default.createElement(react_native_1.Image, { style: [styles_1.default.settingIcon], source: require('../../resources/wallet.png') }),
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.flex },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.settingTxt }, i18n_1.i18n.t('profile.wallet'))),
                    react_1.default.createElement(react_native_1.View, { style: [styles_1.default.flex, styles_1.default.flexEnd] },
                        react_1.default.createElement(react_native_1.Image, { style: styles_1.default.arrow, source: require('../../resources/arrow-right.png') }))),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.userInfo, onPress: this.toggleGame },
                    react_1.default.createElement(react_native_1.Image, { style: [styles_1.default.settingIcon], source: require('../../resources/wallet.png') }),
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.flex },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.settingTxt }, i18n_1.i18n.t('profile.myGames'))),
                    react_1.default.createElement(react_native_1.View, { style: [styles_1.default.flex, styles_1.default.flexEnd] },
                        react_1.default.createElement(react_native_1.Animated.Image, { style: [styles_1.default.dropDown, {
                                    transform: [
                                        {
                                            rotate: this.state.rotation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0deg', '180deg'],
                                            })
                                        }
                                    ]
                                }], source: require('../../resources/drop-down.png') }))),
                react_1.default.createElement(react_native_1.Animated.View, { style: [styles_1.default.gameContainer, {
                            height: this.state.gameHeight.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 420]
                            }),
                            marginVertical: this.state.gameHeight.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 15]
                            }),
                            borderWidth: this.state.gameVisible ? 1 : 0
                        }] },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.gameList },
                        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true },
                            react_1.default.createElement(index_2.default, { name: "test", useDefault: true, isActive: this.state.activeGameId === 1, onSelect: this.changeActive }),
                            react_1.default.createElement(index_2.default, { name: "test", useDefault: true, isActive: this.state.activeGameId === 2, onSelect: this.changeActive }),
                            react_1.default.createElement(index_2.default, { name: "test", useDefault: true, isActive: this.state.activeGameId === 3, onSelect: this.changeActive }),
                            react_1.default.createElement(index_2.default, { name: "test", useDefault: true, isActive: this.state.activeGameId === 4, onSelect: this.changeActive }),
                            react_1.default.createElement(index_2.default, { name: "test", useDefault: true, isActive: this.state.activeGameId === 5, onSelect: this.changeActive }),
                            react_1.default.createElement(index_2.default, { name: "test", useDefault: true, isActive: this.state.activeGameId === 6, onSelect: this.changeActive }))),
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.gameContent },
                        react_1.default.createElement(index_3.default, { title: "title", content: "test content dajklsdlasdhaskdh", onSelect: this.goToGift }),
                        react_1.default.createElement(index_3.default, { title: "title", content: "test content dajklsdlasdhaskdh", onSelect: this.goToGift }),
                        react_1.default.createElement(index_3.default, { title: "title", content: "test content dajklsdlasdhaskdh", onSelect: this.goToGift }),
                        react_1.default.createElement(index_3.default, { title: "title", content: "test content dajklsdlasdhaskdh", onSelect: this.goToGift }),
                        react_1.default.createElement(index_3.default, { title: "title", content: "test content dajklsdlasdhaskdh", onSelect: this.goToGift }))),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.userInfo, onPress: this.goWallet },
                    react_1.default.createElement(react_native_1.Image, { style: [styles_1.default.settingIcon], source: require('../../resources/wallet.png') }),
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.flex },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.settingTxt }, i18n_1.i18n.t('profile.settings'))),
                    react_1.default.createElement(react_native_1.View, { style: [styles_1.default.flex, styles_1.default.flexEnd] },
                        react_1.default.createElement(react_native_1.Image, { style: styles_1.default.arrow, source: require('../../resources/arrow-right.png') }))),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.userInfo, onPress: this.goWallet },
                    react_1.default.createElement(react_native_1.Image, { style: [styles_1.default.settingIcon], source: require('../../resources/wallet.png') }),
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.flex },
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.settingTxt }, i18n_1.i18n.t('profile.helpAndFeedback'))),
                    react_1.default.createElement(react_native_1.View, { style: [styles_1.default.flex, styles_1.default.flexEnd] },
                        react_1.default.createElement(react_native_1.Image, { style: styles_1.default.arrow, source: require('../../resources/arrow-right.png') }))))));
    }
}
Profile.navigationOptions = () => {
    return {
        tabBarLabel: i18n_1.i18n.t('router.profile')
    };
};
exports.default = Profile;
