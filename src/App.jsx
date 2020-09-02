import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.scss';

import AppDrawer from './components/AppDrawer/';
import AppContent from './components/AppContent/';

import { db } from './firebase'
import { getLists, getTodos } from './api'

//import '@material/button/dist/mdc.button.css';


function App() {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {

   getLists().then(setLists)
   getTodos().then(setTodos)
    

    // db.collection("todos")
    //   .get()
    //   .then((snapshot) => {
    //     const todos = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data()
    //   }));

    //   setTodos(todos);
    // })
    // .catch(error => {
    //   console.log('Error getting documents:', error)
    // })

  }, []);


  return (
    <div className="App">
      <AppDrawer lists={lists} />
   
     <AppContent>
        <ul>
          { todos.map(todo => <li key={todo.id}>{todo.title}</li>) }
        </ul>
       
     </AppContent>
     
    </div>
  );
}

export default App;
