import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyAMa3AxZtC7telPQ5brHaHWodZaoG5d8r0",
  authDomain: "quickynotify.firebaseapp.com",
  projectId: "quickynotify",
  storageBucket: "quickynotify.appspot.com",
  messagingSenderId: "960543983205",
  appId: "1:960543983205:web:65c7260dc369d72c71e88c",
  measurementId: "G-5LVNTZHCYL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.analytics();
}

export default firebase;
