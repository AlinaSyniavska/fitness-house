import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWUlUoHN4KTw15oYqvkeVucUGXVSiU3Y4",
    authDomain: "fitness-house-auth-b39f7.firebaseapp.com",
    projectId: "fitness-house-auth-b39f7",
    storageBucket: "fitness-house-auth-b39f7.appspot.com",
    messagingSenderId: "460538649930",
    appId: "1:460538649930:web:9db00a11bd4df096e3b5b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// Android: 389771338876-0gb72b46ni6etaom7oqetqjcbiadt36n.apps.googleusercontent.com

