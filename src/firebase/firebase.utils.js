import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCoVFKOuhoCfYEk-L9wteeup3dKCjNg6eI",
  authDomain: "restaurant-187ff.firebaseapp.com",
  databaseURL: "https://restaurant-187ff.firebaseio.com",
  projectId: "restaurant-187ff",
  storageBucket: "restaurant-187ff.appspot.com",
  messagingSenderId: "593384922049",
  appId: "1:593384922049:web:7608d3df24669ee448ed40",
  measurementId: "G-WXJEX1KR6J",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
