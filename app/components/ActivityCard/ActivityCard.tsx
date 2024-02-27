import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";

interface IProps {
  kcal: number,
}

const ActivityCard: FC<IProps> = ({kcal}) => {
  return (
    <View style={styles.container}>
      <Text>{kcal} Kcal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

});

export default ActivityCard;