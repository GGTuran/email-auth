// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0P09e0MtDp3vuKBixkeqy-6q7q9yaRrY",
  authDomain: "email-auth-ddd12.firebaseapp.com",
  projectId: "email-auth-ddd12",
  storageBucket: "email-auth-ddd12.appspot.com",
  messagingSenderId: "525256015727",
  appId: "1:525256015727:web:c47f3ce46ed1725cc2f29a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
// export default app;
