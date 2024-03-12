import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBv3x5PA0ifaIDL0MfICXlXqHlRGw4WMbw",
    authDomain: "fitness-house-5c2db.firebaseapp.com",
    projectId: "fitness-house-5c2db",
    storageBucket: "fitness-house-5c2db.appspot.com",
    messagingSenderId: "936095261062",
    appId: "1:936095261062:web:5a9492e0edb3b9f50d4c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
/*const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});*/



// Android: 352251535958-u145kfag2bm7b6hiet011v68hbh5qcb2.apps.googleusercontent.com

