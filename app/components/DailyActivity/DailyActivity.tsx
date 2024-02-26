import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { commonHelper } from '../../helpers/common.helper';
import SingleActivity from '../SingleActivity/SingleActivity';
import Title from '../Title/Title';

interface IProps {
	kcal: string;
}

const DailyActivity: FC<IProps> = ({ kcal }) => {
	return (
		<View style={styles.container}>
			<Title
				title={`${kcal} Kcal`}
				titleSize={30}
				subtitle={'Total Kilocalories'}
				subtitleSize={16}
			/>

			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					// justifyContent: 'center',
					// alignItems: 'center',
					// padding: 10,
				}}
			>
				<SingleActivity
					title={`${commonHelper.getRandomWorkoutTime()} h`}
					subtitle={'Time'}
					kcal={+kcal * 0.7}
				/>

				<SingleActivity
					title={`${commonHelper.getRandomStepsCounter()}`}
					subtitle={'Steps'}
					kcal={+kcal * 0.1}
				/>

				<SingleActivity
					title={`${commonHelper.getRandomRopesCounter()}`}
					subtitle={'Points'}
					kcal={+kcal * 0.2}
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
});

export default DailyActivity;
