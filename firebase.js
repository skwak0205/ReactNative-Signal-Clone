import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHEvCT4F7xw1qqkBpJhSlA_iLZu26zHpM',
  authDomain: 'react-native-signal-cd668.firebaseapp.com',
  projectId: 'react-native-signal-cd668',
  storageBucket: 'react-native-signal-cd668.appspot.com',
  messagingSenderId: '874594606769',
  appId: '1:874594606769:web:ffb4c23c8b4fc7e4978c90',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
