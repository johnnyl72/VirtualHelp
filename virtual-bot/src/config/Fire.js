import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBjS8KOy0ysSJP8OEg240rGtPVd9nqtX2s",
  authDomain: "reactbot-amgvwv.firebaseapp.com",
  databaseURL: "https://reactbot-amgvwv.firebaseio.com",
  projectId: "reactbot-amgvwv",
  storageBucket: "reactbot-amgvwv.appspot.com",
  messagingSenderId: "970997604083",
  appId: "1:970997604083:web:b7dca9cb671fa73b45a186"
};

const fire = firebase.initializeApp(config);
export default fire;
