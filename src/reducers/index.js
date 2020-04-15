import { combineReducers } from 'redux'
// import { firebaseReducer } from 'react-redux-firebase'
import rolls from './rolls'


// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// import * as firebase from 'firebase/app'

// // Add the Firebase services that you want to use
// import 'firebase/auth'
// import 'firebase/firestore'


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAE30P8Y0mOOjtEahXQ0dXQ7SBgWcHuXOU",
//   authDomain: "mini-vtt.firebaseapp.com",
//   databaseURL: "https://mini-vtt.firebaseio.com",
//   projectId: "mini-vtt",
//   storageBucket: "mini-vtt.appspot.com",
//   messagingSenderId: "1081024996263",
//   appId: "1:1081024996263:web:5514153e578653bfa7cc82"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// // db.collection("users").add({
// //   first: "Ada",
// //   last: "Lovelace",
// //   born: 1815
// // })
// // .then(function(docRef) {
// //   console.log("Document written with ID: ", docRef.id);
// // })
// // .catch(function(error) {
// //   console.error("Error adding document: ", error);
// // });

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//   });
// });

const rootReducer = combineReducers({
  rolls: rolls
})

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ROLL) {
//     return Object.assign({}, state, {
//       rolls: state.rolls.concat(action.payload)
//     })
//   }
//   return state
// }

export default rootReducer
