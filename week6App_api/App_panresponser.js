// PanResponder api : touch와 gesture(제스처) 이벤트 정보
import React, {Component} from 'react';

// 'react-native'에서 Dimensions, PanResponder 등 가져오기
import {
  Dimensions,
  TouchableHighlight,
  PanResponder,
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';

// window의 width와 height 정보를 변수에 저장함
const {width, height} = Dimensions.get('window');
let styles = {};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // oPosition 객체를 생성해서 정사각형의 원래 위치의 x 축과 y축의 정보를 state에 저장함
      // 화면의 정 중앙에 위치시키도록 설정
      oPosition: {
        x: width / 2 - 100,
        y: height / 2 - 100,
      },
      // position 객체를 생성해서 정사각형의 실제(actual) 위치의 x 축과 y축의 정보를 state에 저장함
      // 화면의 정 중앙에 위치시키도록 설정
      position: {
        x: width / 2 - 100,
        y: height / 2 - 100,
      },
    };
    this._handlePanResponderMove = this._handlePanResponderMove.bind(this);
    this._handlePanResponderRelease =
      this._handlePanResponderRelease.bind(this);

    // PanResponder를 생성하고, onStartShouldSetPanResponder에 true 값을 반환하고,
    // onPanResponderMove와 onPanResponderRelease 메서드를 설정함
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderRelease,
    });
  }

  // 움직임이 시작된 위치와 시작 위치에서 현재 위치까지의 거리를 계산해
  // 전체 이동 거리의 x와 y를 알아 냄. 알아낸 x와 y 값을 position state에 업데이트함
  _handlePanResponderMove(evt, gestureState) {
    let ydiff = gestureState.y0 - gestureState.moveY;
    let xdiff = gestureState.x0 - gestureState.moveX;
    this.setState({
      position: {
        y: this.state.oPosition.y - ydiff,
        x: this.state.oPosition.x - xdiff,
      },
    });
  }

  // oPosition state에 뷰에 업데이트된 위치를 지정함
  _handlePanResponderRelease() {
    this.setState({
      oPosition: this.state.position,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.positionDisplay}>
          x: {this.state.position.x} y:{this.state.position.y}
        </Text>

        {/* x와 y의 값을 뷰에 연결하고 마진을 업데이트해서 정사각형(item)을 드래그할 수 있게 만듦 */}

        <View
          {...this._panResponder.panHandlers} // I
          style={[
            styles.box,
            {
              marginLeft: this.state.position.x,
              marginTop: this.state.position.y,
            },
          ]}
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionDisplay: {
    textAlign: 'center',
    marginTop: 50,
    zIndex: 1,
    position: 'absolute',
    width,
  },
  box: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
});
