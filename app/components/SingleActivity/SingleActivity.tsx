import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { globalColors } from '../../constants/colors';
import CustomProgressBar from '../CustomProgressBar/CustomProgressBar';
import Title from '../Title/Title';

interface IProps {
	title: string;
	subtitle: string;
	kcal: number;
	type: string;
}

const SingleActivity: FC<IProps> = ({ title, subtitle, kcal }) => {
	return (
		<View style={styles.container}>
			<Title
				title={title}
				titleSize={16}
				subtitle={subtitle}
				subtitleSize={14}
			/>

			<View style={styles.progressBarContainer}>
				<CustomProgressBar progress={0.3} color={'#000'} />
				<CustomProgressBar progress={0.7} color={globalColors.pink} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	progressBarContainer: {
		height: 50,
		marginTop: 60,
		flexDirection: 'column',
		transform: [{ rotate: '-90deg' }],
		gap: 10,
		flexWrap: 'wrap',
	},
});

export default SingleActivity;
