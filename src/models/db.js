import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDWQPOVBsU3H_RY8W57kWCLP8zaW0bKPAo',
  authDomain: 'bot-aira.firebaseapp.com',
  databaseURL: 'https://bot-aira.firebaseio.com',
  storageBucket: 'bot-aira.appspot.com',
};
firebase.initializeApp(config);

const db = firebase.database();

export default db
