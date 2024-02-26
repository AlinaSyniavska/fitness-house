import {numbers} from "../constants/numbers";

export const commonHelper = {
  format: (num: number) => {
    const n = String(num),
      p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
      p < 0 || i < p ? `${m} ` : m
    );
  },

  getRandomKcal: (): number => Math.floor(Math.random() * (numbers.maxKcal - numbers.minKcal) + numbers.minKcal),

  getRandomWorkoutTime: (): number => Math.round(Math.random() * (numbers.maxWorkoutTime - numbers.minWorkoutTime) + numbers.minWorkoutTime),

  getRandomStepsCounter: (): number =>
    Math.round(Math.random() * (numbers.maxStepsCounter - numbers.minStepsCounter) + numbers.minStepsCounter),

  getRandomRopesCounter: (): number =>
    Math.round(Math.random() * (numbers.maxPointsCounter - numbers.minPointsCounter) + numbers.minPointsCounter),

  getProgress: (type: string, value: number): number => {
    switch (type) {
      case "time":
        return value / numbers.maxWorkoutTime;
      case "steps":
        return value / numbers.maxStepsCounter;
      case "points":
        return value / numbers.maxPointsCounter;
      default:
        return 1;
    }
  },
};
