import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWKr4OddoKJEHYIPzv_9eWE_AnXplK4Cs",
  authDomain: "petro-crwn-clothing-db.firebaseapp.com",
  projectId: "petro-crwn-clothing-db",
  storageBucket: "petro-crwn-clothing-db.appspot.com",
  messagingSenderId: "641269926244",
  appId: "1:641269926244:web:6172a1bc2f50b6c7b01271"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const gogoleProvide = new GoogleAuthProvider();

gogoleProvide.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, gogoleProvide);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};