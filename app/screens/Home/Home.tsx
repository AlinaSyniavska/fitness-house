import React, {FC} from 'react';
import {SafeAreaView, View, Text} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {styled} from "nativewind";

import {RootStackParamList} from "../../navigation/Navigation";
import FooterMenu from "../../layout/FooterMenu/FooterMenu";
import {globalStyles} from "../../styles";
import {globalColors} from "../../constants/colors";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const StyledText = styled(Text);
const StyledView = styled(View);

const Home: FC<Props> = ({route, navigation}) => {

  console.log('************')
  console.log(route)
  console.log('************')
  console.log(navigation)

  return (
    <SafeAreaView style={[globalStyles.screenContainer, {backgroundColor: globalColors.lightGray}]}>
      <StyledView>
        <StyledText className='text-cyan-500'>Home!!!!!!!!!!!!!</StyledText>
      </StyledView>

      <View style={globalStyles.footer}>
        <FooterMenu/>
      </View>
    </SafeAreaView>
  );
};

export default Home;