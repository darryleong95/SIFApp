import firebase from 'react-native-firebase';

const config = {
    apiKey: "AIzaSyAq08iS2iZ0FXXkUZF7L0Owa8BtMwS26fY",
    authDomain: "sifapp-ef5b7.firebaseapp.com",
    databaseURL: "https://sifapp-ef5b7.firebaseio.com",
    projectId: "sifapp-ef5b7",
    storageBucket: "sifapp-ef5b7.appspot.com",
    messagingSenderId: "889027302074"
  };


export const firebaseApp = firebase.initializeApp(config)
export const auth = firebase.auth()
export const firebasedb = firebaseApp.database()