import React, { FC, useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

import Calendar from '../../components/Calendar/Calendar';
import Card from '../../components/Card/Card';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import { commonHelper } from '../../helpers/common.helper';
import FooterMenu from '../../layout/FooterMenu/FooterMenu';
import { RootStackParamList } from '../../navigation/Navigation';
import { globalStyles } from '../../styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<Props> = ({ route, navigation }) => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [kcal, setKcal] = useState<number>(0);

	useEffect(() => {
		setKcal(commonHelper.getRandomKcal());
	}, [selectedDate]);

	return (
		<SafeAreaView style={[globalStyles.screenContainer]}>

{/*			<ScrollView>

			</ScrollView>*/}

			<View style={styles.container}>
				<Card date={selectedDate} kcal={commonHelper.format(kcal)} />

				<Calendar setDate={setSelectedDate} />

				<DailyActivity kcal={kcal} />
			</View>

			<View style={globalStyles.footer}>
				<FooterMenu />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		// justifyContent:'space-between',
		alignItems: 'center',
		gap: 30,
		paddingHorizontal: 10,
		paddingVertical: 30,
	},
});

export default Home;
