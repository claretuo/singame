"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalContants_1 = require("../../utils/GlobalContants");
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
    wrapper: {
        height: 214
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
