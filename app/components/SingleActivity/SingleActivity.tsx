import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {globalColors} from '../../constants/colors';
import CustomProgressBar from '../CustomProgressBar/CustomProgressBar';
import Title from '../Title/Title';
import {commonHelper} from "../../helpers/common.helper";
import ActivityCard from "../ActivityCard/ActivityCard";

interface IProps {
  title: string;
  subtitle: string;
  kcal: number;
  type: string;
}

const SingleActivity: FC<IProps> = ({title, subtitle, kcal, type}) => {

  return (
    <View style={styles.container}>
      <Title
        title={title}
        titleSize={16}
        subtitle={subtitle}
        subtitleSize={14}
      />

      <View style={styles.progressBarContainer}>
        <CustomProgressBar progress={commonHelper.getProgress(type, +title)} color={'#000'}/>
        <CustomProgressBar progress={(Math.random() * (0.9 - 0.4) + 0.4)} color={globalColors.pink}/>
      </View>

      <View style={{marginTop: 50}}>
        <ActivityCard kcal={kcal}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  progressBarContainer: {
    height: 50,
    marginTop: 60,
    flexDirection: 'column',
    transform: [{rotate: '-90deg'}],
    gap: 10,
    flexWrap: 'wrap',
  },
});

export default SingleActivity;
