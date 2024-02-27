import React, {FC} from 'react';
import {Text, View, StyleSheet, Image} from "react-native";

import {globalColors} from "../../constants/colors";

interface IProps {
  date: Date,
  kcal: string,
}

const Card: FC<IProps> = ({date, kcal}) => {
  return (
    <View>

      <Image source={require('../../../assets/home/Mask group.png')} style={styles.bgCard}/>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardDate}>{`${(date.toUTCString()).split(' ').slice(0, 3).join(' ')}`}</Text>
          <Text style={styles.cardKcal}>{kcal} Kcal</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    width: 340,
    height: 185,
    borderRadius: 20,
    backgroundColor: globalColors.pink,
  },
  bgCard: {
    position: 'absolute',
    zIndex: 1,
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  cardDate: {
    color: '#000',
    fontSize: 16,
  },
  cardKcal: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default Card;