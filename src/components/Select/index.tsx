import React from 'react';
import styles from './styles';
import {
  Animated,
  Easing,
  Picker,
  Text,
  View
  } from 'react-native';
import { AnimatedValue } from 'react-navigation';
import { gScreen } from '../../utils/GlobalContants';
import { TouchableOpacity } from 'react-native';

interface IProps {
  defaultVal: string;
  options: string[];
  visible: boolean;
  choose(choice: string): void;
  hide(): void;
}
interface IState {
  offset: AnimatedValue;
  choice: string;
  timer?: number;
}
export default class Select extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      offset: new Animated.Value(0),
      choice: this.props.defaultVal,
      timer: undefined,
    };
  }

  componentDidMount() {
    this.in();
  }

  componentWillUnMount() {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
  }

  render() {
    if (!this.props.visible) {
      return (null);
    } else {
      return (
        <Animated.View style={[styles.tip, {
          transform: [{
            translateY: this.state.offset.interpolate({
              inputRange: [0, 1],
              outputRange: [gScreen.height, 0]
            }),
          }]
        }]}>
          <View style={styles.tipTitleView} >
            <TouchableOpacity style={styles.btn} onPress={this.cancel}>
              <Text style={styles.cancelText}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.ok}>
              <Text style={styles.okText} >确定</Text>
            </TouchableOpacity>
          </View>
          <Picker
            style={styles.picker}
            mode="dialog"
            selectedValue={this.state.choice}
            onValueChange={choice => this.setState({ choice: choice })}>
            {this.props.options.map((aOption: string) => <Picker.Item color="#555" label={aOption} value={aOption} key={aOption} />)}
          </Picker>
        </Animated.View>
      );
    }
  }

  // 显示动画
  in = () => {
    Animated.parallel([
      Animated.timing(
        this.state.offset,
        {
          easing: Easing.linear,
          duration: 500,
          toValue: 1,
        }
      )
    ]).start();
  }

  // 隐藏动画
  out = () => {
    Animated.parallel([
      Animated.timing(
        this.state.offset,
        {
          easing: Easing.linear,
          duration: 500,
          toValue: 0,
        }
      )
    ]).start();
  }

  // 取消
  cancel = () => {
    this.out();
    this.props.hide();
  }

  // 选择
  ok = () => {
    this.out();
    this.props.choose(this.state.choice);
  }

}