import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, Text, Pressable, Platform} from "react-native";
import {Card} from "react-native-paper";
import { Hoverable } from 'react-native-web-hooks';

import {globalColors} from "../../constants/colors";

interface IProps {
  kcal: number,
  cardIcon: ReactNode,
  cardText: string,
}

const ActivityCard: FC<IProps> = ({kcal, cardIcon, cardText}) => {

  return (
    <View style={styles.container}>
      <Hoverable>
        {isHovered => (
          <Pressable accessible >
            <Card mode={'contained'} style={[
              styles.card,
              {backgroundColor: isHovered ? globalColors.pink : '#fff',
                // ...Platform.select({ web: {
                //     cursor: 'pointer',
                //   }}),
              }
            ]}>
              <Card.Title title="" subtitle=""
                          left={() => cardIcon}
                          style={[
                            styles.cardTitle,
                            {borderTopWidth: isHovered ? 0 : 3}
                          ]}/>
              <Card.Content style={{paddingHorizontal: 7,}}>
                <Text adjustsFontSizeToFit={true} style={{color: isHovered ? 'white' : '#000'}}><Text style={{fontWeight: 'bold'}}>{kcal}</Text> Kcal</Text>
                <Text adjustsFontSizeToFit={true} style={{color: isHovered ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'}}>{cardText}</Text>
              </Card.Content>
            </Card>
          </Pressable>
        )}
      </Hoverable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: 100,
    height: 100,
  },
  cardTitle: {
    paddingHorizontal: 7,
    minHeight: 40,
  }

});

export default ActivityCard;