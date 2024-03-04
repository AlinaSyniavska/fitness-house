import React, {FC} from 'react';
import {FlexAlignType, StyleSheet, Text, View} from "react-native";
import {globalColors} from "../../constants/colors";

interface IProps {
  title: string,
  titleSize: number,
  subtitle: string,
  subtitleSize: number,
  position?: FlexAlignType,
}

const Title: FC<IProps> = ({title, titleSize, subtitle, subtitleSize, position = 'center'}) => {
  return (
    <View style={[
      styles.container,
      {alignItems: position},
    ]}>
      <Text style={[styles.title, {fontSize: titleSize}]}>{title}</Text>
      <Text style={[styles.subtitle, {fontSize: subtitleSize}]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    color: globalColors.gray,
  },
})

export default React.memo(Title);