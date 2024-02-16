import { initializeApp } from "firebase/app";


// config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8jJ16GmVfEKNQ3BmqMwnBGKqlOnjUSRQ",
  authDomain: "file-sharing-3846e.firebaseapp.com",
  projectId: "file-sharing-3846e",
  storageBucket: "file-sharing-3846e.appspot.com",
  messagingSenderId: "1009596414808",
  appId: "1:1009596414808:web:0e755c82c4511aed23832d",
  measurementId: "G-KTXKF6FCCD"
};

// initialize Firebase
export const app = initializeApp(firebaseConfig);

