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
