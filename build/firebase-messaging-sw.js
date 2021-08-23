importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  apiKey: "AIzaSyAMa3AxZtC7telPQ5brHaHWodZaoG5d8r0",
  authDomain: "quickynotify.firebaseapp.com",
  projectId: "quickynotify",
  storageBucket: "quickynotify.appspot.com",
  messagingSenderId: "960543983205",
  appId: "1:960543983205:web:65c7260dc369d72c71e88c",
  measurementId: "G-5LVNTZHCYL",
});

const initMessaging = firebase.messaging();
