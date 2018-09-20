import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInAndRetrieveDataWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();
