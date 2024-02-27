import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {commonHelper} from '../../helpers/common.helper';
import SingleActivity from '../SingleActivity/SingleActivity';
import Title from '../Title/Title';

interface IProps {
  kcal: number,
}

const DailyActivity: FC<IProps> = ({kcal}) => {

  return (
    <View style={styles.container}>
      <Title
        title={`${kcal} Kcal`}
        titleSize={30}
        subtitle={'Total Kilocalories'}
        subtitleSize={16}
      />

      <View style={styles.activitiesContainer}>
        <SingleActivity
          title={`${commonHelper.getRandomWorkoutTime()}`}
          subtitle={'Time (hours)'}
          kcal={Math.trunc(kcal * 0.7)}
          type="time"
        />

        <SingleActivity
          title={`${commonHelper.getRandomStepsCounter()}`}
          subtitle={'Steps'}
          kcal={Math.trunc(kcal * 0.1)}
          type="steps"
        />

        <SingleActivity
          title={`${commonHelper.getRandomRopesCounter()}`}
          subtitle={'Points'}
          kcal={Math.trunc(kcal * 0.2)}
          type="points"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 30,
    width: '100%',
  },
  activitiesContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default DailyActivity;
