import firebase from "firebase";

import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB9wJoipegMKUdWOHjUbsP126g_ujkBRmk",
  authDomain: "zerohumedad-fbcb2.firebaseapp.com",
  projectId: "zerohumedad-fbcb2",
  storageBucket: "zerohumedad-fbcb2.appspot.com",
  messagingSenderId: "272458221308",
  appId: "1:272458221308:web:a5bfc480413e6827b1f979"
};


const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}


