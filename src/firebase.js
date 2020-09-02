import firebase from 'firebase'

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyDQhe7XBwgehJmO_x9T_iSWHRA2CUtlZGE',
    authDomain: 'react-notes-vm.firebaseapp.com',
    projectId: 'react-notes-vm'
  });
  
const db = firebase.firestore();

  export { db };