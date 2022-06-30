// Import the functions you need from the SDKs you need
 import * as firebase from "firebase";
 import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDhI6ohsRoy1iS5lI6rq_F8G7FyMyX5wl8",
  authDomain: "praticetest-ba528.firebaseapp.com",
  projectId: "praticetest-ba528",
  storageBucket: "praticetest-ba528.appspot.com",
  messagingSenderId: "59297287046",
  appId: "1:59297287046:web:cbaead166096147a313a07",
  measurementId: "G-RR954KX7BH"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };


const analytics = getAnalytics(app);