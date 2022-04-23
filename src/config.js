import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDteZhWWJFtI7-OwZa5DNJSVTLNg3bTML0",
    authDomain: "farm-mate-v2.firebaseapp.com",
    databaseURL: "https://farm-mate-v2-default-rtdb.firebaseio.com",
    projectId: "farm-mate-v2",
    storageBucket: "farm-mate-v2.appspot.com",
    messagingSenderId: "709150591055",
    appId: "1:709150591055:web:875dab586b8dcb8ec3823a",
    measurementId: "G-89THQVRTRF"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);