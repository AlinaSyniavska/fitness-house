import {StyleSheet} from "react-native";
import {globalColors} from "./constants/colors";

export const globalStyles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  footer: {
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: globalColors.lightGray,
  }
});

