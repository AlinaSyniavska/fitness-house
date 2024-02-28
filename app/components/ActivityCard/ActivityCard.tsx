import React, {FC, ReactNode, useRef} from 'react';
import {StyleSheet, View, Text} from "react-native";
import {Card} from "react-native-paper";
import { useHover, useFocus, useActive } from 'react-native-web-hooks';

import {globalColors} from "../../constants/colors";

interface IProps {
  kcal: number,
  cardIcon: ReactNode,
  cardText: string,
}

const ActivityCard: FC<IProps> = ({kcal, cardIcon, cardText}) => {

  const ref = useRef(null);

  const isHovered = useHover(ref);

  return (
    <View style={styles.container}>

      <Card
        ref={ref.current}
        style={[styles.card,
        isHovered && {
          backgroundColor: globalColors.pink,
        }
          ]}
      >
        <Card.Title title="" subtitle=""
                    left={() => cardIcon}
                    style={{
          minHeight: 40,
          borderTopWidth: 3,
        }}/>
        <Card.Content style={{
          // marginTop: 0,
        }}>
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>{kcal} Kcal</Text>
          <Text className={'text-white/50'}>{cardText}</Text>
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