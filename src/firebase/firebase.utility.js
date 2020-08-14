import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAbbV4Grhq6TnQH0aF7c64JtZWtAdSGFf4",
    authDomain: "portfoliodb-ce3f2.firebaseapp.com",
    databaseURL: "https://portfoliodb-ce3f2.firebaseio.com",
    projectId: "portfoliodb-ce3f2",
    storageBucket: "portfoliodb-ce3f2.appspot.com",
    messagingSenderId: "828101245998",
    appId: "1:828101245998:web:1f635c397f0a0ae34db3bf",
    measurementId: "G-ZY7BYLGNPH"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;