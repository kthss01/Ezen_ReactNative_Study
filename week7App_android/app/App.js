import React from 'react';
import DatePicker from './DatePicker';
import Home from './Home';
import TimePicker from './TimePicker';
import Toast from './Toast';
import Toolbar from './Toolbar';
import ViewPagerComponent from './ViewPagerComponent';

function getScene(scene) {
  switch (scene) {
    case 'Home':
      return Home;
    case 'Toolbar':
      return Toolbar;
    case 'ViewPager':
      return ViewPagerComponent;
    case 'DatePicker':
      return DatePicker;
    case 'TimePicker':
      return TimePicker;
    case 'Toast':
      return Toast;
    default:
      return Home;
  }
}

const App = props => {
  const Scene = getScene(props.scene);

  return <Scene openDrawer={props.openDrawer} jump={props.jump} />;
};

export default App;
