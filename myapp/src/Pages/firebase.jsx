// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD4yZCUDjaOkQtaEHV7RuYLik9sIzfd5Mg",
//   authDomain: "quickstart-7a0b3.firebaseapp.com",
//   projectId: "quickstart-7a0b3",
//   storageBucket: "quickstart-7a0b3.appspot.com",
//   messagingSenderId: "738801085601",
//   appId: "1:738801085601:web:f49e4242d511de56b854e0",
//   measurementId: "G-GJZKY9P2GZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4yZCUDjaOkQtaEHV7RuYLik9sIzfd5Mg",
  authDomain: "quickstart-7a0b3.firebaseapp.com",
  projectId: "quickstart-7a0b3",
  storageBucket: "quickstart-7a0b3.appspot.com",
  messagingSenderId: "738801085601",
  appId: "1:738801085601:web:f49e4242d511de56b854e0",
  measurementId: "G-GJZKY9P2GZ"
 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
