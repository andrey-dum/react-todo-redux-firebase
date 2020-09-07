import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import AppDrawer from './components/AppDrawer/';
import AppContent from './components/AppContent/';

import TodoListPage from './pages/TodoListPage';

//import DBContext from './context/db'


//import { getLists, getTodos, getListTodos, createTodo, deleteTodo, updateTodo } from './api'
import useApi from './hooks/api';

import '@rmwc/typography/styles';
import '@rmwc/list/styles';
import '@rmwc/top-app-bar/styles';

function App() {
  // const [lists, setLists] = useState([]);
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {

  // //get('todos').then(setLists)
  //  getLists().then(setLists)
  //  getTodos().then(setTodos)

  // }, []);
  const  {data: {lists } } = useApi();

  return (
   
    <div className="App">

     <div className="demo-content">
        <AppDrawer lists={lists} />

        <AppContent>
         <Switch>
          
           <Route exact path="/" component={TodoListPage} />
           <Route exact path="/planned" component={TodoListPage} />
           <Route exact path="/important" component={TodoListPage} />
           <Route exact path="/:listId/:todoId?" component={TodoListPage} />
         </Switch>
        </AppContent>


        
      </div>
     
    </div>

  );
}

export default App;
