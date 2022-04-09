import React, {Component} from 'react';
// 'react-native'에서 DatePickerAndroid 가져오기
import {View, Text} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';

let styles;
class DatePicker extends Component {
  constructor() {
    super();
    // state를 만들고 초기 값으로 new Date()를 지정함
    this.state = {
      date: new Date(),
    };
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    this.setState({date: currentDate});
  };

  showDatepicker = () => {
    this.showMode('date');
  };

  showTimepicker = () => {
    this.showMode('time');
  };

  showMode(currentMode) {
    DateTimePickerAndroid.open({
      value: this.state.date,
      onChange: this.onChange,
      mode: currentMode,
      is24Hour: true,
    });
  }
  render() {
    const {container, text} = styles;
    // openDatePicker 메서드를 호출하고 선택된 날짜를 뷰에 표시하는 버튼 만들기
    return (
      <View style={container}>
        <View>
          <Text onPress={this.showDatepicker}>Open Date Picker</Text>
        </View>
        <Text style={text}>
          selected: {moment(this.state.date).format('YYYY-MM-DD')}
        </Text>
      </View>
    );
  }
}
styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 15,
    fontSize: 20,
  },
};
export default DatePicker;
