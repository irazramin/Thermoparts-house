// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBdV7y9ShLHASAIlKj931MdFY3mWr2p54',
  authDomain: 'ac-manufacture.firebaseapp.com',
  projectId: 'ac-manufacture',
  storageBucket: 'ac-manufacture.appspot.com',
  messagingSenderId: '252343672581',
  appId: '1:252343672581:web:e2f1ff476e64081f81216c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;