// Alert api test
import React, {Component} from 'react';
// react-native에서 alert api 가져오기
import {TouchableHighlight, View, Text, StyleSheet, Alert} from 'react-native';

let styles = {};

export default class App extends Component {
  constructor() {
    super();

    // state로 showMessage의 초기값을 false로 지정
    this.state = {
      showMessage: false,
    };

    this.showAlert = this.showAlert.bind(this);
  } // constructor

  // showAlert 메서드 정의
  // 두 개의 버튼과 title, message 지정
  showAlert() {
    // 임포트한 Alert 작동 구현
    Alert.alert('Alert Test', 'Alert Test Message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel clicked...'),
        style: 'destructive',
      },
      {
        text: 'Show Alert',
        // Show Alert 버튼을 누르면, state의 showMessage를 true로 변경함
        onPress: () => this.setState({showMessage: true}),
      },
    ]);
  } // showAlert()

  render() {
    const {showMessage} = this.state;
    return (
      <View style={this.styles.container}>
        <TouchableHighlight onPress={this.showAlert} style={this.styles.button}>
          <Text>TEST ALERT API</Text>
        </TouchableHighlight>
        {/* state의 showMessage의 값이 false이면 메세지 안 보이게 하기 처리 */}
        {showMessage && <Text>Showing message - success</Text>}
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
    },
    button: {
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ededed',
    },
  });
}
