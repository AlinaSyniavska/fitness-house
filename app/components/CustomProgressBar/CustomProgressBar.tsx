import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";
import Title from "../Title/Title";
import {ProgressBar} from "react-native-paper";
import {globalColors} from "../../constants/colors";

interface IProps {
  progress: number,
  color: string,
}

const CustomProgressBar: FC<IProps> = ({progress, color}) => {
  return (
    <View style={styles.container}>

      <ProgressBar
        style={{
          width: 120,
          height: 15,
          // transform: [{ rotate: '-90deg' }],
          borderRadius: 15,
        }}
        progress={progress}
        color={globalColors.lightGray}
        fillStyle={{
          backgroundColor: color,
          borderRadius: 15,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})

export default CustomProgressBar;