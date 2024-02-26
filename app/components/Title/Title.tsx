import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {globalColors} from "../../constants/colors";

interface IProps {
  title: string,
  titleSize: number,
  subtitle: string,
  subtitleSize: number,
}

const Title: FC<IProps> = ({title, titleSize, subtitle, subtitleSize}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {fontSize: titleSize}]}>{title}</Text>
      <Text style={[styles.subtitle, {fontSize: subtitleSize}]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: globalColors.gray,
  },
})

export default Title;