import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground, Image
} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import * as Google from "expo-auth-session/providers/google";
import {GoogleAuthProvider, signInWithCredential} from "firebase/auth";

import {RootStackParamList} from "../../navigation/Navigation";
import {globalColors} from "../../constants/colors";
import {auth} from "../../../firebaseConfig";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main: FC<Props> = ({route, navigation}) => {

  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: "389771338876-0gb72b46ni6etaom7oqetqjcbiadt36n.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground source={require('../../../assets/main/quickly-blob.png')} resizeMode="cover"
                       style={styles.bgMainImage}>

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.text]}>FITNESS HOUSE</Text>
            <Text style={[styles.subTitle, styles.text]}>
              FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU
            </Text>

            <Pressable
              style={({pressed}) => [
                {backgroundColor: pressed ? globalColors.lightPink : globalColors.lightGray},
                styles.btn,
              ]}>
              <Text style={styles.btnText} onPress={() => navigation.navigate('Home')}>Go!</Text>
              {/*<Text style={styles.btnText} onPress={() => navigation.navigate('Login', {promptAsync})}>Go!</Text>*/}
            </Pressable>
          </View>
        </View>

        <Image
          style={{
            flex: 1,
          }}
          source={require('../../../assets/main/athletic-girl-pink-sports.png')}/>
      </ImageBackground>

      <ImageBackground source={require('../../../assets/main/Group.png')} style={styles.bgTopImage}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalColors.pink,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    width: '70%',
    borderRadius: 50,
    padding: 10,
  },
  btnText: {
    paddingHorizontal: 50,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bgMainImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  bgTopImage: {
    position: 'absolute',
    right: 137,
    top: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: 130,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },

});

export default Main;