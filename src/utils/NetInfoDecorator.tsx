import React from 'react';
import { NetInfo } from 'react-native';

interface IState {
  isConnected: boolean;
}

const netInfoDecorator = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class extends React.Component<P & IState> {
    constructor(props: any) {
      super(props);
      this.state = {
        isConnected: true,
      };
    }

    componentDidMount() {
      NetInfo.isConnected.addEventListener('change', this._handleNetworkConnectivityChange);
    }

    _handleNetworkConnectivityChange = (isConnected: boolean) => {
      this.setState({ isConnected });
    }

    render() {
      return (
        <WrappedComponent {...this.props} {...this.state} />
      );
    }
};

export default netInfoDecorator;