import React, {FC} from 'react';
import {View, StyleSheet} from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import { Moment } from 'moment';

import {globalColors} from "../../constants/colors";
import {useData} from "../../context/DataContext";

interface IProps {
  setDate: (date: Date) => any,
}

const Calendar: FC<IProps> = ({setDate}) => {

  const {setDate: setContextDate} = useData();

  const selectDate = (date: Moment) => {
    setDate(new Date(date.toISOString()));
    setContextDate(new Date(date.toISOString()));
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
        style={{width: 'auto', height:80, paddingTop: 5, paddingBottom: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: 70,
  },
})

export default React.memo(Calendar);