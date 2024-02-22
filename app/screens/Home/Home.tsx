import React, {FC} from 'react';
import {SafeAreaView, View, Text, ImageBackground} from "react-native";
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
    <SafeAreaView style={[globalStyles.screenContainer]}>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30,
      }}>
        <StyledView style={{
          width: 340,
          height: 185,
          borderRadius: 20,
          backgroundColor: globalColors.pink,
        }}>

          <ImageBackground source={require('../../../assets/home/Mask group.png')} resizeMode="cover"
                           style={{
                             // flex: 1,
                             // justifyContent: 'center',
                             width: '100%',
                             height: '100%',
                           }}
          >

            <Text>HOME</Text>
          </ImageBackground>

        </StyledView>
      </View>

      <View style={globalStyles.footer}>
        <FooterMenu/>
      </View>
    </SafeAreaView>
  );
};

export default Home;