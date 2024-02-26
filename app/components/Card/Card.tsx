import React, {FC} from 'react';
import {ImageBackground, Text, View, StyleSheet} from "react-native";

import {globalColors} from "../../constants/colors";

interface IProps {
  date: Date,
  kcal: string,
}

const Card: FC<IProps> = ({date, kcal}) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={require('../../../assets/home/Mask group.png')} resizeMode="cover" style={styles.bgCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardDate}>{`${(date.toUTCString()).split(' ').slice(0, 3).join(' ')}`}</Text>
          <Text style={styles.cardKcal}>{kcal} Kcal</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginTop: 50,
    width: 340,
    height: 185,
    borderRadius: 20,
    backgroundColor: globalColors.pink,
  },
  bgCard: {
    position: 'absolute',
    top: -52,
    left: 0,
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  cardDate: {
    color: '#fff',
    fontSize: 16,
  },
  cardKcal: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default Card;