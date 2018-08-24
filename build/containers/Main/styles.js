"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalContants_1 = require("./../../utils/GlobalContants");
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: GlobalContants_1.gScreen.width,
        height: GlobalContants_1.gScreen.height,
        minHeight: 70,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#555',
        fontSize: 17
    }
});
