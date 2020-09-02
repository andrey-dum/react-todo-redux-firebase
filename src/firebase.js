import firebase from 'firebase'

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: 'react-notes-vm.firebaseapp.com',
    projectId: 'react-notes-vm'
  });
  
const db = firebase.firestore();

export { db };