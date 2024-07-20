// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUyQLmoAWKuPBWAQqQDnFSYG-pyjuW2l8",
  authDomain: "socialapp-65b5b.firebaseapp.com",
  projectId: "socialapp-65b5b",
  storageBucket: "socialapp-65b5b.appspot.com",
  messagingSenderId: "243984245",
  appId: "1:243984245:web:e64de4ceee25587bd3153c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };
