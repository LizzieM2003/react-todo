import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBwwpxeCx9_HFsmI2ubhOUX1IKG8KwbnKk",
    authDomain: "lizzie-todo-app.firebaseapp.com",
    databaseURL: "https://lizzie-todo-app.firebaseio.com",
    storageBucket: "lizzie-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
