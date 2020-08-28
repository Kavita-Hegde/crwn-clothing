import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDGByWyi06Ud61pfuc-BWqRDQWn0wI74X0",
    authDomain: "crown-db-d39dc.firebaseapp.com",
    databaseURL: "https://crown-db-d39dc.firebaseio.com",
    projectId: "crown-db-d39dc",
    storageBucket: "crown-db-d39dc.appspot.com",
    messagingSenderId: "806171218871",
    appId: "1:806171218871:web:7ac02753c08ccf5c174e32",
    measurementId: "G-DMF5MNHZTK"
  }

  firebase.initializeApp(config);

export const createUserProfileDocument =  async(userAuth , additionaldata) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldata
      })

    }catch(error){
      console.log('Error creating',error.message);
    }

  }
  return userRef;

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
