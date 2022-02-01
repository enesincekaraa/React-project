import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { auth, db, provider } from 'plugins/firebase'

const loginWithEmailAndPassword = async (email: string, password: string) => {
  await auth.signInWithEmailAndPassword(email, password)
}

const loginWithGoogle = async () => {
  await auth.signInWithPopup(provider)
}

const getFavorites = async (userId: string) => {
  const docRef = doc(db, 'favorites', userId)
  const data = await getDoc(docRef)

  return data
}

const addFavorite = async (data: any, userId: string) => {
  await setDoc(
    doc(db, 'favorites', userId),
    { movies: arrayUnion(data) },
    { merge: true }
  )
}

const removeFavorite = async (data: any, userId: string) => {
  const docRef = doc(db, 'favorites', userId)
  await updateDoc(docRef, {
    movies: arrayRemove(data),
  })
}

const userService = {
  loginWithEmailAndPassword,
  loginWithGoogle,
  getFavorites,
  addFavorite,
  removeFavorite,
}

export default userService
