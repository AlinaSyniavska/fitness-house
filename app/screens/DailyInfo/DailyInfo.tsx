import React, {FC} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from "react-native";

import {globalStyles} from "../../styles";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";

interface IProps {
}

const DailyInfo: FC<IProps> = () => {
  return (
    <SafeAreaView style={[globalStyles.screenContainer]}>

        <View style={styles.container}>
          <Text>Daily Info</Text>
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

  },
})

export default DailyInfo;