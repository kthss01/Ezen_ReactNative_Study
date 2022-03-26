import React from 'react';

// Books 컴포넌트 가져오기
import Books from './src/Books';

// 루트 리듀서 가져오기
import rootReducer from './src/reducers';

// react-redux에서 Provider 레퍼(Wrapper) 가져오기
import {Provider} from 'react-redux';

// redux에서 createStore 가져오기
import {createStore} from 'redux';

// 루트 리듀서를 이용해서 스토어 객체 생성
const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      // Provider 컴포넌트로 감싼 Books 컴포넌트 반환
      // Provider의 prop으로 store에 전달됨
      <Provider store={store}>
        <Books />
      </Provider>
    );
  }
}
