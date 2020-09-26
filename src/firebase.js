import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6kaQqn--u9K48hfr1Ly3w1EsnzfJG2nk",
    authDomain: "clone-e32d8.firebaseapp.com",
    databaseURL: "https://clone-e32d8.firebaseio.com",
    projectId: "clone-e32d8",
    storageBucket: "clone-e32d8.appspot.com",
    messagingSenderId: "380093108151",
    appId: "1:380093108151:web:ef1e77f27725243fa6e232",
    measurementId: "G-6BMPWPTY72"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };