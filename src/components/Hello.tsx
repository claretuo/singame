import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { ITest } from '../store/test';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  test?: ITest;
}

interface State {
  enthusiasmLevel: number;
}
@inject('test')
@observer
export class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(props);
    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1
    };
  }

  onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
  onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
  onIncrement1 = () => {
    console.log('on increment ');
    if (this.props.test && this.props.test.increase) {
      this.props.test.increase();
    }
  }
  onDecrement1 = () => {
    console.log('on increment ');
    if (this.props.test && this.props.test.decrease) {
      this.props.test.decrease();
    }
  }
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

  render() {
    const list = ['a', 'b', 'c'];
    console.log(this.props);
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello {this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
        <Text style={styles.greeting}>
          Hello {this.props.test && this.props.test.sum}
        </Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement1}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement1}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});