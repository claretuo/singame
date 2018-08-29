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
import { Country } from '../../store/signIn/index';

interface IProps {
  defaultVal: number;
  options: Country[];
  visible: boolean;
  choose(choice: number): void;
  hide(): void;
}
interface IState {
  offset: AnimatedValue;
  choice: number;
}
export default class Select extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      offset: new Animated.Value(0),
      choice: this.props.defaultVal
    };
  }

  componentDidMount() {
    this.in();
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
            {this.props.options.map((aOption: Country) => <Picker.Item color="#555" label={aOption.name} value={aOption.id} key={aOption.id} />)}
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