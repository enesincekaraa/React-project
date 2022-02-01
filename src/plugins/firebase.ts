// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDPGRjg3HDa6yj_RKqhYYR0wCdHPFeOk7Q',
  authDomain: 'movie-e7f20.firebaseapp.com',
  projectId: 'movie-e7f20',
  storageBucket: 'movie-e7f20.appspot.com',
  messagingSenderId: '105133957522',
  appId: '1:105133957522:web:52388d5a7cc3dd8d01614b',
  measurementId: 'G-7BG89BLP60',
})

const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = getFirestore(app)
export { auth, provider, db }
