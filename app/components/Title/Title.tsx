import React, {FC} from 'react';
import {FlexAlignType, StyleSheet, Text, View} from "react-native";
import {globalColors} from "../../constants/colors";
import {useFonts} from "expo-font";
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium, Quicksand_600SemiBold,
  Quicksand_700Bold
} from "@expo-google-fonts/quicksand";

interface IProps {
  title: string,
  titleSize: number,
  subtitle: string,
  subtitleSize: number,
  position?: FlexAlignType,
}

const Title: FC<IProps> = ({title, titleSize, subtitle, subtitleSize, position = 'center'}) => {
  const [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  });

  return (
    <View style={[
      styles.container,
      {alignItems: position},
    ]}>
      <Text style={[styles.title, {fontSize: titleSize}, styles.quicksand]}>{title}</Text>
      <Text style={[styles.subtitle, {fontSize: subtitleSize}]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  title: {
    color: '#000',
  },
  subtitle: {
    color: globalColors.gray,
  },
  quicksand: {
    fontFamily: "Quicksand_700Bold",
  },
})

export default React.memo(Title);