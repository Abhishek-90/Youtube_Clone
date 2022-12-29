import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZgaU0hxFo26HjvGLa3muHfK2no2G08yo",
  authDomain: "clone-372213.firebaseapp.com",
  projectId: "youtube-clone-372213",
  storageBucket: "youtube-clone-372213.appspot.com",
  messagingSenderId: "860134069363",
  appId: "1:860134069363:web:3da8906561e07b6e2b4606",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
