import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {commonHelper} from '../../helpers/common.helper';
import SingleActivity from '../SingleActivity/SingleActivity';
import Title from '../Title/Title';
import {IActivity} from "../../interfaces/activity.interface";

interface IProps {
  kcal: number,
}

const activities: IActivity[] = [
  {
    id: 1,
    getTitle: () => commonHelper.getRandomWorkoutTime(),
    title: '',
    subtitle: 'Time (hours)',
    perKcal: 0.7,
    type: 'time',
    cardIcon: <FontAwesome6 name="dumbbell" size={20} color="black" />,
    cardText: 'Dumbbell',
  },
  {
    id: 2,
    getTitle: () => commonHelper.getRandomStepsCounter(),
    title: '',
    subtitle: 'Steps',
    perKcal: 0.1,
    type: 'steps',
    cardIcon: <Ionicons name="footsteps" size={20} color="black" />,
    cardText: 'Treadmill',
  },
  {
    id: 3,
    getTitle: () => commonHelper.getRandomRopesCounter(),
    title: '',
    subtitle: 'Points',
    perKcal: 0.2,
    type: 'points',
    cardIcon: <MaterialCommunityIcons name="jump-rope" size={20} color="black" />,
    cardText: 'Rope',
  },
];

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
        {
          activities.map(item => (
            <SingleActivity
              key={item.id}
              activity={{
                ...item,
                perKcal: commonHelper.getPercentageKcal(kcal, item.perKcal),
                title: item.getTitle && item.getTitle().toString() || item.title,
              }}
            />
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    width: '100%',
  },
  activitiesContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default DailyActivity;
