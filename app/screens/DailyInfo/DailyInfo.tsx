import React, {FC} from 'react';
import {SafeAreaView, View, StyleSheet, Image, ImageBackground, Dimensions} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

import {globalStyles} from "../../styles";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";
import {useData} from "../../context/DataContext";
import Title from "../../components/Title/Title";
import {Card} from "react-native-paper";
import {globalColors} from "../../constants/colors";

interface IProps {
}

const DailyInfo: FC<IProps> = () => {
  const {dumbbellKcal, stepKcal, pointKcal, steps, points, date} = useData();

  return (
    <SafeAreaView style={[globalStyles.screenContainer]}>

      <View style={styles.container}>

        <Title
          title={'Today\'s Information'}
          titleSize={18}
          subtitle={date.toUTCString().split(' ').slice(0, 3).join(' ')}
          subtitleSize={14}
          position={'flex-start'}
        />

        <View style={styles.cardContainer}>

          <View style={styles.cardRowContainer}>
            {/*stepKcal*/}
            <Card mode={'contained'} style={styles.card}>
              <Card.Title title="Calories" subtitle=""
                          titleVariant={'titleSmall'}
                          titleStyle={{verticalAlign: 'middle',}}
                          right={() => <Image source={require('../../../assets/dailyInfo/caloriesIcon.png')}
                                              resizeMode={'contain'} style={styles.cardIcon}/>}
                          style={styles.cardTitle}
              />
              <Card.Content>
                <Title
                  title={stepKcal.toString()}
                  titleSize={16}
                  subtitle={'Kcal'}
                  subtitleSize={12}
                  position={'flex-start'}
                />
              </Card.Content>
            </Card>

            {/*steps*/}
            <Card mode={'contained'} style={styles.card}>
              <Card.Title title="Steps" subtitle=""
                          titleVariant={'titleSmall'}
                          titleStyle={{verticalAlign: 'middle',}}
                          right={() => <FontAwesome5 name="running" size={22} color={globalColors.pink}
                                                     style={styles.cardIcon}/>}
                          style={styles.cardTitle}
              />
              <Card.Content>
                <Title
                  title={steps.toString()}
                  titleSize={16}
                  subtitle={'Kcal'}
                  subtitleSize={12}
                  position={'flex-start'}
                />
              </Card.Content>
            </Card>
          </View>

          <View style={styles.cardRowContainer}>
            {/*pointKcal*/}
            <Card mode={'contained'} style={styles.card}>
              <Card.Title title="Calories" subtitle=""
                          titleVariant={'titleSmall'}
                          titleStyle={{verticalAlign: 'middle',}}
                          right={() => <Image source={require('../../../assets/dailyInfo/caloriesIcon.png')}
                                              resizeMode={'contain'} style={styles.cardIcon}/>}
                          style={styles.cardTitle}
              />
              <Card.Content>
                <Title
                  title={pointKcal.toString()}
                  titleSize={16}
                  subtitle={'Kcal'}
                  subtitleSize={12}
                  position={'flex-start'}
                />
              </Card.Content>
            </Card>

            {/*points*/}
            <Card mode={'contained'} style={styles.card}>
              <Card.Title title="Points" subtitle=""
                          titleVariant={'titleSmall'}
                          titleStyle={{verticalAlign: 'middle',}}
                          right={() => <Image source={require('../../../assets/dailyInfo/stepIcon.png')}
                                              resizeMode={'contain'} style={styles.cardIcon}/>}
                          style={styles.cardTitle}
              />
              <Card.Content>
                <Title
                  title={points.toString()}
                  titleSize={16}
                  subtitle={'Points'}
                  subtitleSize={12}
                  position={'flex-start'}
                />
              </Card.Content>
            </Card>
          </View>

          <View style={styles.cardRowContainer}>
            {/*Heart bpm*/}
            <Card mode={'contained'} style={styles.singleCard}>
              <ImageBackground source={require('../../../assets/dailyInfo/Chart2.png')} resizeMode="cover"
                               style={styles.bgCard}>
                <Card.Title title="Heart" subtitle=""
                            titleVariant={'titleSmall'}
                            titleStyle={{verticalAlign: 'middle',}}
                            right={() => <Image source={require('../../../assets/dailyInfo/heartIcon.png')}
                                                resizeMode={'contain'} style={styles.cardIcon}/>}
                            style={[styles.cardTitle, {paddingRight: 20, paddingTop: 60,}]}
                />
                <Card.Content style={{paddingBottom: 15}}>
                  <Title
                    title={'74'}
                    titleSize={16}
                    subtitle={'bpm'}
                    subtitleSize={12}
                    position={'flex-start'}
                  />
                </Card.Content>
              </ImageBackground>
            </Card>
          </View>

        </View>

      </View>

      <View style={globalStyles.footer}>
        <FooterMenu/>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 20,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    gap: 10,
  },
  cardRowContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderRadius: 24,
    backgroundColor: globalColors.lightPink,
    width: Dimensions.get('window').width * 0.9,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    // borderWidth: 2,
    // borderColor: globalColors.lightGray,
    borderRadius: 24,
    minWidth: 110,
    width: '100%',
    height: 90,
    paddingBottom: 15,
    paddingTop: 5,
    paddingRight: 15,
    paddingLeft: 5,
  },
  cardIcon: {
    width: 20,
    height: 20,
  },
  cardTitle: {
    margin: 0,
    minHeight: 20,
  },
  singleCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 24,
    minWidth: 110,
    width: '100%',
    height: 180,
  },
  bgCard: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  }
})

export default DailyInfo;