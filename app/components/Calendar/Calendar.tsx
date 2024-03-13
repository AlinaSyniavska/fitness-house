import React, {FC} from 'react';
import {View, StyleSheet} from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import { Moment } from 'moment';
import {useFonts} from "expo-font";
import {Quicksand_700Bold} from "@expo-google-fonts/quicksand";

import {globalColors} from "../../constants/colors";
import {useData} from "../../context/DataContext";

interface IProps {
  setDate: (date: Date) => any,
}

const Calendar: FC<IProps> = ({setDate}) => {
  const [fontsLoaded] = useFonts({Quicksand_700Bold});

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
        calendarHeaderStyle={{color: globalColors.gray, fontFamily: 'Quicksand_700Bold'}}
        dateNumberStyle={{color: globalColors.gray, fontFamily: 'Quicksand_700Bold'}}
        iconContainer={{flex: 0.1}}
        onDateSelected={(date) => selectDate(date)}
        style={styles.calendar}
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
  calendar: {
    width: 'auto', height:80, paddingTop: 5, paddingBottom: 5,
    fontFamily: "Quicksand_700Bold",
  },

})

export default React.memo(Calendar);