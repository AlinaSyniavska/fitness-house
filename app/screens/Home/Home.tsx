import React, {FC} from 'react';
import {SafeAreaView, View, StyleSheet} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";

import {RootStackParamList} from "../../navigation/Navigation";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";
import {globalStyles} from "../../styles";
import {commonHelper} from "../../helpers/common.helper";
import Card from "../../components/Card/Card";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<Props> = ({route, navigation}) => {

  return (
    <SafeAreaView style={[globalStyles.screenContainer]}>

      <View style={styles.container}>

        <Card kcal={commonHelper.format(commonHelper.getRandomKcal())}/>




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
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },



});

export default Home;