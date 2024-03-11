import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBC7Bu6IMpzEvsnpgBk51N_lr2Ns6ADtBM",
    authDomain: "fitness-house-42193.firebaseapp.com",
    projectId: "fitness-house-42193",
    storageBucket: "fitness-house-42193.appspot.com",
    messagingSenderId: "728167157155",
    appId: "1:728167157155:web:2f7074db881cbbc6051e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
/*const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});*/



// Android: 1015776871421-nl21e58cptdc00bdb6qavm2sbreume81.apps.googleusercontent.com
// Android: 728167157155-aeh63rqn64dt3d61gurn7ao7uua2h125.apps.googleusercontent.com

