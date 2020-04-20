export const firebase = {
  apiKey: "AIzaSyAE30P8Y0mOOjtEahXQ0dXQ7SBgWcHuXOU",
  authDomain: "mini-vtt.firebaseapp.com",
  databaseURL: "https://mini-vtt.firebaseio.com",
  projectId: "mini-vtt",
  storageBucket: "mini-vtt.appspot.com",
  messagingSenderId: "1081024996263",
  appId: "1:1081024996263:web:5514153e578653bfa7cc82"
};

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB
  enableLogging: false
}

export default { firebase, rrfConfig }
