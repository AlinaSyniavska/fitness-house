import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd5QnAnuJ_Z_KqJN11Jn-4XhJPVGA6zUI",
  authDomain: "fitness-house-react-native-app.firebaseapp.com",
  projectId: "fitness-house-react-native-app",
  storageBucket: "fitness-house-react-native-app.appspot.com",
  messagingSenderId: "836043601873",
  appId: "1:836043601873:web:da58f4f2acb460d99ed2f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


