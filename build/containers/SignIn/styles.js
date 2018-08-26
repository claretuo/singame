"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalContants_1 = require("./../../utils/GlobalContants");
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    container: {
        width: GlobalContants_1.gScreen.width,
        height: GlobalContants_1.gScreen.height,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    logo: {
        marginTop: 84,
        marginBottom: 71,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoTxt: {
        fontSize: 28,
        color: 'rgba(80, 80, 80, 1)'
    },
    loginBox: {
        width: GlobalContants_1.gScreen.width * 0.72,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    loginItem: {
        height: 50,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    loginTitle: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTxt: {
        fontSize: 19,
        color: '#505050'
    },
    loginExtra: {
        flex: 1
    },
    loginBtn: {
        width: GlobalContants_1.gScreen.width * 0.59,
        marginTop: 44,
        backgroundColor: '#999999',
        height: 42,
        borderRadius: 21,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        color: '#fff'
    },
    loginTip: {
        marginTop: 16,
        height: 42,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tipTxt: {
        color: '#505050',
        fontSize: 15
    },
    text: {
        color: '#555',
        fontSize: 17
    }
});
