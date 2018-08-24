import { gScreen } from './utils/GlobalContants';
import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import { Provider } from 'mobx-react/native';
import stores from './store';
import { Hello } from './components/Hello';

export default class App extends React.Component<{}, {}> {
  render() {
    console.log('the global screen info ', gScreen, Platform);
    return (
      <View style={styles.container}>
        <Provider { ...stores }>
          <Hello name="hello" enthusiasmLevel={1} />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
