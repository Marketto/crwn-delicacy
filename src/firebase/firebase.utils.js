import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-sd2DGSYl1qHJwpgOmJhXESIMVNQKcpI",
    authDomain: "crown-db-b03d8.firebaseapp.com",
    databaseURL: "https://crown-db-b03d8.firebaseio.com",
    projectId: "crown-db-b03d8",
    storageBucket: "crown-db-b03d8.appspot.com",
    messagingSenderId: "211692030674",
    appId: "1:211692030674:web:3168246c5ab398a9077b0b",
    measurementId: "G-RG4BRT2JG6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.error('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;