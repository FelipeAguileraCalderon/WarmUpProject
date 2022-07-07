import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2yzsuAAmwq7akN0ke0SxPADsGggG_fto",
  authDomain: "cloud-computing-85384.firebaseapp.com",
  projectId: "cloud-computing-85384",
  storageBucket: "cloud-computing-85384.appspot.com",
  messagingSenderId: "817414214105",
  appId: "1:817414214105:web:de0dcd05a67472243ac9c8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)