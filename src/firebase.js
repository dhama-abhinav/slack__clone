import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCaKGGqbNa1gz3aZES4itoe4pgwUIQU0mw",
  authDomain: "slack-demo-d7078.firebaseapp.com",
  databaseURL: "https://slack-demo-d7078.firebaseio.com",
  projectId: "slack-demo-d7078",
  storageBucket: "slack-demo-d7078.appspot.com",
  messagingSenderId: "1017323135809",
  appId: "1:1017323135809:web:6832901cb2f3eed7f777c0",
  measurementId: "G-0E22HEX0RX"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth = firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db