import React, {FC} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from "react-native";

import {globalStyles} from "../../styles";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";
import {useData} from "../../context/DataContext";

interface IProps {
}

const DailyInfo: FC<IProps> = () => {

  const {dumbbellKcal, stepKcal, pointKcal, steps, points} = useData();

  return (
    <SafeAreaView style={[globalStyles.screenContainer]}>

        <View style={styles.container}>

          <Text>***** {steps}, {points} *******</Text>
          <Text>{dumbbellKcal}, {stepKcal}, {pointKcal}</Text>

        </View>

        <View style={globalStyles.footer}>
          <FooterMenu/>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginLeft: 20,
  },
})

export default DailyInfo;