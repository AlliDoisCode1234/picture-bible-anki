import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDifeGTcgtiYjmsSvDPWMQ555KngmeomWY",
    authDomain: "picture-bible-anki.firebaseapp.com",
    projectId: "picture-bible-anki",
    storageBucket: "picture-bible-anki.appspot.com",
    messagingSenderId: "871367392477",
    appId: "1:871367392477:web:125109de1909bc05f2ef34"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }