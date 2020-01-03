import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAX7RgYJFUZuS2gDH2S9338PHX_M2O6GaE",
  authDomain: "shop-43468.firebaseapp.com",
  databaseURL: "https://shop-43468.firebaseio.com",
  projectId: "shop-43468",
  storageBucket: "shop-43468.appspot.com",
  messagingSenderId: "319164212263",
  appId: "1:319164212263:web:a06fcf5cad9c5b8d905a02",
  measurementId: "G-JFYTX2N995"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

