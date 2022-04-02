// 3. Clipboard api test

// Clipboard depreacted 되서 이거 대신 쓴다고함
// import Clipboard from '@react-native-community/clipboard';
// 위에꺼 아님 또 바뀐듯
// 아래꺼도 안됨
import Clipboard from '@react-native-clipboard/clipboard';

import React, {Component} from 'react';
// react-native 에서 Clipboard 가져오기
import {
  TextInput,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  // Clipboard,
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 20,
  },
  input: {
    padding: 10,
    marginTop: 15,
    height: 60,
    backgroundColor: '#dddddd',
  },
  button: {
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
  },
});

export default class App extends Component {
  constructor() {
    super();

    // state에 clipboardData 라는 빈 배열을 저장함
    this.state = {
      clipboardData: [],
    };

    this.pushClipboardToArray = this.pushClipboardToArray.bind(this);
    // Clipboard.setString('Hello, Clipboard!'); // 여기서 에러남 새거 쓰면
  }

  componentDidMount() {
    // Clipboard 의 값을 'Hello, Clipboard'로 업데이트 함
    // Clipboard.setString('Hello, Clipboard!'); // 여기서 에러남 새거 쓰면
  }

  // updateClipboard 메서드 추가함
  // 이 메서드는 기존의 클리보드의 값을 업데이트함
  updateClipboard(string) {
    Clipboard.setString(string);
  }

  // async await 구문 이용
  async pushClipboardToArray() {
    const {clipboardData} = this.state;
    // Clipboard에 저장된 값을 꺼내서, 변수에 저장
    let content = await Clipboard.getString();
    // clipboardData 배열에 content 추가
    clipboardData.push(content);

    // state에 clipboardData 재저장함
    this.setState({
      clipboardData,
    });
  }

  render() {
    const {clipboardData} = this.state;
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Test Clipboard API</Text>

        {/* 
          updateClipboard 메서드를 TextInput에 연결함 
          TouchableHighlight를 누르면 pushClipboardToArray 메서드가 실행되게 함
        */}
        <TextInput
          style={styles.input}
          onChangeText={text => this.updateClipboard(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.pushClipboardToArray}>
          <Text>Click to Add to Array</Text>
        </TouchableHighlight>

        {/* clipboardData 배열의 값을 매핑해서 화면에 출력 표시함 */}
        {clipboardData.map((d, i) => {
          return <Text key={i}>{d}</Text>;
        })}
      </View>
    );
  }
}
