import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";

interface IProps {
}

const SingleActivity: FC<IProps> = () => {
  return (
    <View style={styles.container}>
      Activity
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    width: '100%',
  },
})

export default SingleActivity;