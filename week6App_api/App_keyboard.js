// Keyboard api
import React, {Component} from 'react';

// 'react-native'에서 Keyboard API 가져오기
import {
  TouchableHighlight,
  Keyboard,
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';

let styles = {};

export default class App extends Component {
  // 모든 키보드 이벤트에 이벤트 리스너를 설정하고 해당 이벤트가 발생한 경우에
  // logEvent 메서드를 호출해서 콘솔에 이벤트 이름을 표시함
  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      () => this.logEvent('keyboardWillShow'),
    );
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      this.logEvent('keyboardDidShow'),
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => this.logEvent('keyboardWillHide'),
    );
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      this.logEvent('keyboardDidHide'),
    );
    this.keyboardWillChangeFrameListener = Keyboard.addListener(
      'keyboardWillChangeFrame',
      () => this.logEvent('keyboardWillChangeFrame'),
    );
    this.keyboardDidChangeFrameListener = Keyboard.addListener(
      'keyboardDidChangeFrame',
      () => this.logEvent('keyboardDidChangeFrame'),
    );
  }

  // 이벤트 이름을 인수로 전달받아 콘솔에 이벤트 이름을 표시함
  logEvent(event) {
    console.log('event: ', event);
  }
  // 키보드를 화면에서 사라지게 함(
  dismissKeyboard() {
    Keyboard.dismiss();
  }
  //Keyboard.removeAllListeners를 호출하고 componentWillMount에서 선언한 각 이벤트를 인수로 전달함
  removeListeners() {
    Keyboard.removeAllListeners('keyboardWillShow');
    Keyboard.removeAllListeners('keyboardDidShow');
    Keyboard.removeAllListeners('keyboardWillHide');
    Keyboard.removeAllListeners('keyboardDidHide');
    Keyboard.removeAllListeners('keyboardWillChangeFrame');
    Keyboard.removeAllListeners('keyboardDidChangeFrame');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        {/* UI의 버튼에 dismissKeyboard 메서드를 연결 */}
        <TouchableHighlight
          onPress={this.dismissKeyboard}
          style={styles.button}>
          <Text>Dismiss Keyboard</Text>
        </TouchableHighlight>
        {/* UI의 버튼에 removeListener 메서드를 연결 */}
        <TouchableHighlight
          onPress={this.removeListeners}
          style={styles.button}>
          <Text>Remove Listeners</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
  input: {
    margin: 10,
    backgroundColor: '#ededed',
    height: 50,
    padding: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#dddddd',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
