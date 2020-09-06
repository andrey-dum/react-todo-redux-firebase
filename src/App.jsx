import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import AppDrawer from './components/AppDrawer/';
import AppContent from './components/AppContent/';

import TodoListPage from './pages/TodoListPage';
import Home from './pages/Home';


import DBContext from './context/db'

 import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';

import { getLists, getTodos, getListTodos, createTodo, deleteTodo, updateTodo } from './api'


import '@rmwc/typography/styles';
import '@rmwc/list/styles';
import '@rmwc/top-app-bar/styles';

function App() {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {

  //get('todos').then(setLists)
   getLists().then(setLists)
   getTodos().then(setTodos)

  }, []);


  return (
    <DBContext.Provider value={{lists, todos, getTodos, getListTodos, createTodo, deleteTodo, updateTodo}}>
    <div className="App">
      
      <SimpleTopAppBar
          title="test"
          navigationIcon
          onNav={() => console.log('Navigate')}
          actionItems={[
            {
              icon: 'file_download',
              onClick: () => console.log('Do Something')
            },
            { icon: 'login', onClick: () => console.log('Do Something') },
            { icon: 'face', onClick: () => console.log('Do Something') }
          ]}
        />
        <TopAppBarFixedAdjust />

     <div className="demo-content">
        <AppDrawer lists={lists} />

        <AppContent>
         <Switch>
          
           <Route exact path="/" component={Home} />
           <Route exact path="/:listId" component={TodoListPage} />
         </Switch>
        </AppContent>
        
      </div>
     
    </div>
  </DBContext.Provider>
  );
}

export default App;
