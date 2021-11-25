import firebase from 'firebase'

const firebaseConfig = {

  apiKey: "AIzaSyC70ONca-BDnsWQL7hj_UAp5AdDuN6NyJw",

  authDomain: "logist-landing.firebaseapp.com",

  projectId: "logist-landing",

  storageBucket: "logist-landing.appspot.com",

  messagingSenderId: "334672386141",

  appId: "1:334672386141:web:a8e798068b30052c7a55b4"

};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// export { auth };
export default db;