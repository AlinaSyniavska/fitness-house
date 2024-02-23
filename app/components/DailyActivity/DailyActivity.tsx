import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import Title from "../Title/Title";
import SingleActivity from "../SingleActivity/SingleActivity";

interface IProps {
  kcal: string,
}

const DailyActivity: FC<IProps> = ({kcal}) => {
  return (

    <View style={styles.container}>
      <Title title={`${kcal} Kcal`} titleSize={30} subtitle={'Total Kilocalories'} subtitleSize={16}/>

      <View>
        <SingleActivity/>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 30,
    width: '100%',
  },
})

export default DailyActivity;