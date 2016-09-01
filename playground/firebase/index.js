import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBwwpxeCx9_HFsmI2ubhOUX1IKG8KwbnKk",
  authDomain: "lizzie-todo-app.firebaseapp.com",
  databaseURL: "https://lizzie-todo-app.firebaseio.com",
  storageBucket: "lizzie-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Lizzie',
    age: 47
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Have a snack',
});

todosRef.push({
  text: 'Finish react course'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Fetched app object', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch data', e);
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'Speckles'
// }).then(() => {
//   console.log('Update user name worked!');
// }, (e) => {
//   console.log('Updated user name failed', e);
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Appy'
// }).then(() => {
//   console.log('Update app name worked!');
// }, (e) => {
//   console.log('Update app name failed', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user/age').remove();
// firebaseRef.child('user').update({
//   name: 'Lizzie M',
//   age: null
// });

// firebaseRef.update({
//   isRunning: false,
//   'user/age': 21
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed!', e);
// })
