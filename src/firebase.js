import firebase from 'firebase'

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
   
    authDomain: 'react-notes-vm.firebaseapp.com',
    projectId: 'react-notes-vm',
    databaseURL: 'https://react-notes-vm.firebaseio.com',
    storageBucket: 'react-notes-vm.appspot.com',
    messagingSenderId: '563890394479'


  });
  
// firebase.initializeApp({
//   apiKey: 'process.env.REACT_APP_API_KEY2',
//   authDomain: 'reactodo.firebaseapp.com',
//     projectId: 'reactodo-1285b',
//     //appId: '1:853702437056:web:356a2257476d5e5a7ea525',
//     authDomain: 'reactodo-1285b.firebaseapp.com',
//     databaseURL: 'https://reactodo-1285b.firebaseio.com',
//     storageBucket: 'reactodo-1285b.appspot.com',
//     messagingSenderId: '266921594804'
                        

// });



const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };