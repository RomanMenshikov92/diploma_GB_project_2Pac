// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArcypl9mgmUyAd3lgfaJGuwkOKHaddYt4",
  authDomain: "files-datebase-2pac.firebaseapp.com",
  projectId: "files-datebase-2pac",
  storageBucket: "files-datebase-2pac.appspot.com",
  messagingSenderId: "666329118470",
  appId: "1:666329118470:web:13e98b4f64fcf1fbd1d087",
  measurementId: "G-DZ7F85X960",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const database = getDatabase(app);
