import React, {FC} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from "react-native";

import {globalStyles} from "../../styles";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";
import {useRoute} from "@react-navigation/native";

interface IProps {
}

const DailyInfo: FC<IProps> = () => {


  const route = useRoute();

  console.log(route.params)

  return (
    <SafeAreaView style={[globalStyles.screenContainer]}>

        <View style={styles.container}>
          <Text style={{
            marginTop: 100,
            marginLeft: 20,
          }}>Daily Info</Text>
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