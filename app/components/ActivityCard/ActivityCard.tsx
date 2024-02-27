import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";
import {Card, Text} from "react-native-paper";

import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {globalColors} from "../../constants/colors";

interface IProps {
  kcal: number,
}


const LeftContent = () => <FontAwesome6 name="dumbbell" size={18} color="white" />
const LeftContent2 = () => <Ionicons name="footsteps-outline" size={24} color="black" />
const LeftContent3 = () => <MaterialCommunityIcons name="jump-rope" size={24} color="black" />

const ActivityCard: FC<IProps> = ({kcal}) => {
  return (
    <View style={styles.container}>

      <Card style={styles.card}>
        <Card.Title title="" subtitle="" left={LeftContent} style={{
          // backgroundColor: globalColors.pink,
          minHeight: 40,
          // borderRadius: 20,
        }}/>
        <Card.Content style={{
          // marginTop: 0,
        }}>
          <Text variant="titleLarge" style={{
            color: 'white',
          }}>{kcal}</Text>
          <Text variant="bodyMedium">Dumbbell</Text>
        </Card.Content>
      </Card>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: 110,
    height: 110,
    backgroundColor: globalColors.gray,
  },


});

export default ActivityCard;