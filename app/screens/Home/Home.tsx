import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

import Calendar from '../../components/Calendar/Calendar';
import HomePinkCard from '../../components/HomePinkCard/HomePinkCard';
import {commonHelper} from '../../helpers/common.helper';
import FooterMenu from '../../layout/FooterMenu/FooterMenu';
import {RootStackParamList} from '../../navigation/Navigation';
import {globalStyles} from '../../styles';
import {DailyActivity} from "../../components/DailyActivity/DailyActivity";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<Props> = ({route, navigation}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [kcal, setKcal] = useState<number>(0);

  useEffect(() => {
    setKcal(commonHelper.getRandomKcal());
  }, [selectedDate]);

  return (
    <SafeAreaView style={[globalStyles.screenContainer]}>
      <ScrollView>
        <View style={styles.container}>
          <HomePinkCard date={selectedDate} kcal={commonHelper.format(kcal)}/>

          <Calendar setDate={setSelectedDate}/>

          <DailyActivity kcal={kcal}/>
        </View>

        <View style={globalStyles.footer}>
          <FooterMenu/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },
});

export default Home;
