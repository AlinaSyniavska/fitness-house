import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, Text, Pressable} from "react-native";
import {Card} from "react-native-paper";
import { Hoverable } from 'react-native-web-hooks';

import {globalColors} from "../../constants/colors";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/Navigation";

interface IProps {
  kcal: number,
  cardIcon: ReactNode,
  cardText: string,
}

const ActivityCard: FC<IProps> = ({kcal, cardIcon, cardText}) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToDailyInfo = (kcal: number) => {
    navigation.navigate('DailyInfo', {kcal: kcal});
  };

  return (
    <View style={styles.container}>
      <Hoverable>
        {isHovered => (
          <Pressable accessible style={({pressed}) => [
            {backgroundColor: pressed ? globalColors.lightPink : '#fff'}
          ]}>
            <Card mode={'contained'} onPress={()=> goToDailyInfo(kcal)} style={[
              styles.card,
              // {backgroundColor: isHovered ? globalColors.pink : '#fff'}
              {backgroundColor: globalColors.pink}
            ]}>
              <Card.Title title="" subtitle=""
                          left={() => cardIcon}
                          style={[
                            styles.cardTitle,
                            // {borderTopWidth: isHovered ? 0 : 3}
                          ]}/>
              <Card.Content style={{paddingHorizontal: 15,}}>
                {/*<Text adjustsFontSizeToFit={true} style={{color: isHovered ? 'white' : '#000'}}><Text style={{fontWeight: 'bold'}}>{kcal}</Text> Kcal</Text>*/}
                {/*<Text adjustsFontSizeToFit={true} style={{color: isHovered ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'}}>{cardText}</Text>*/}
                <Text adjustsFontSizeToFit={true} style={{color: 'white'}}><Text style={{fontWeight: 'bold'}}>{kcal}</Text> Kcal</Text>
                <Text adjustsFontSizeToFit={true} style={{color: 'rgba(255,255,255,0.7)'}}>{cardText}</Text>
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
    paddingHorizontal: 15,
    minHeight: 40,
  }

});

export default React.memo(ActivityCard);