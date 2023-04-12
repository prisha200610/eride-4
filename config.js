import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAlJNLWGCgmA1LGThYndB_1MyQSYaYzqWg",
    authDomain: "e-ride-88d44.firebaseapp.com",
    projectId: "e-ride-88d44",
    storageBucket: "e-ride-88d44.appspot.com",
    messagingSenderId: "564217196906",
    appId: "1:564217196906:web:49fba8a28a5f7fd589b513"
  };

firebase.initialozeApp(firebaseConfig);
export default firebase.firestore();;