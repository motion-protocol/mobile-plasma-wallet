import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react/native';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import autobind from 'autobind-decorator';

import ColorSelector from '../components/ColorSelector';
import TransactionsList from '../components/TransactionsList';
import DepositForm from '../components/DepositForm';

@inject('app')
@observer
export default class DepositScreen extends React.Component {
  // static navigationOptions = {
  //   header: <ColorSelector />,
  // };

  @autobind
  handleSubmit(value) {
    const { app } = this.props;
    alert(`Deposit ${value} ${app.color}`);
  }

  render() {
    const { app } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TransactionsList />
        <DepositForm onSubmit={this.handleSubmit} color={app.color} />
      </KeyboardAvoidingView>
    );
  }

  _handleLearnMorePress = () => {
    // WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    // WebBrowser.openBrowserAsync(
    //   'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    // );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
