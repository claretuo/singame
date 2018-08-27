"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const GlobalContants_1 = require("../../utils/GlobalContants");
const [aWidth, aHeight] = [GlobalContants_1.gScreen.width, 214];
const [left, bottom] = [0, 0];
exports.default = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        width: GlobalContants_1.gScreen.width,
        height: aHeight,
        left: left,
        bottom: bottom,
    },
    mask: {
        justifyContent: 'center',
        backgroundColor: '#383838',
        opacity: 0.8,
        position: 'absolute',
        width: GlobalContants_1.gScreen.width,
        height: aHeight,
        left: left,
        bottom: bottom,
    },
    tip: {
        width: aWidth,
        height: aHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tipTitleView: {
        height: 53,
        width: aWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: '#f0f0f0',
    },
    btn: {
        height: 53,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelText: {
        color: '#e6454a',
        fontSize: 16,
    },
    okText: {
        color: '#e6454a',
        fontSize: 16,
        fontWeight: 'bold',
    },
    picker: {
        justifyContent: 'center',
        height: aHeight - 53,
        width: aWidth,
    },
    itempicker: {
        color: '#e6454a',
        fontSize: 19
    }
});
