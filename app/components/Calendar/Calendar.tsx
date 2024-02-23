import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import {globalColors} from "../../constants/colors";
import { Moment } from 'moment';

interface IProps {
  setDate: (date: Date) => any,
}

const Calendar: FC<IProps> = ({setDate}) => {

  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const selectDate = (date: Moment) => {
    setDate(new Date(date.toISOString()));
    setCurrentDate(new Date(date.toISOString()));
  }

  return (
    <View style={styles.container}>
      <CalendarStrip
        selectedDate={new Date()}
        showDayName={false}
        calendarAnimation={{type: 'sequence', duration: 30}}
        daySelectionAnimation={{type: 'background', duration: 200, highlightColor: globalColors.lightPink}}
        calendarColor={'#fff'}
        calendarHeaderStyle={{color: globalColors.gray}}
        dateNumberStyle={{color: globalColors.gray}}
        iconContainer={{flex: 0.1}}
        onDateSelected={(date) => selectDate(date)}
        style={{width: 'auto', height:70, paddingTop: 5, paddingBottom: 5}}
      />



      <View>
        <Text>
          {`${currentDate}`.split(' ').slice(0, 3).join(' ')}
          <br />
          Day Activity
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})

export default Calendar;