export const commonHelper = {
	format: (num: number) => {
		const n = String(num),
			p = n.indexOf('.');
		return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
			p < 0 || i < p ? `${m} ` : m
		);
	},
	getRandomKcal: (): number => Math.floor(Math.random() * (2000 - 1500) + 1500),
	getRandomWorkoutTime: (): number => Math.round(Math.random() * (3 - 1) + 1),
	getRandomStepsCounter: (): number =>
		Math.round(Math.random() * (10000 - 9000) + 9000),
	getRandomRopesCounter: (): number =>
		Math.round(Math.random() * (1200 - 1000) + 1000),
};
