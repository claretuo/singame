"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var isIOS = react_native_1.Platform.OS === 'ios';
exports.gScreen = {
    width: react_native_1.Dimensions.get('window').width,
    height: react_native_1.Dimensions.get('window').height,
    navBarHeight: isIOS ? 64 : 50,
    navBarPaddingTop: isIOS ? 20 : 0,
    onePix: 1 / react_native_1.PixelRatio.get(),
};
exports.gColors = {
    theme: 'rgb(217, 51, 58)',
    background: '#f5f5f5',
    border: '#d5d5d5',
    healthGreen: 'rgb(142, 213, 7)',
    healthYellow: 'rgb(254, 210, 10)',
    healthRed: 'rgb(251, 25, 8)'
};
