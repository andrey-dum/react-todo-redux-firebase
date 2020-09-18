import React, {useState, useEffect, useReducer} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import AppDrawer from './components/AppDrawer/';
import AppContent from './components/AppContent/';

import TodoListPage from './pages/TodoListPage';


import {reducer, initialState, actions} from './store'
import DataContext from './context/store'


//import { getLists, getTodos, getListTodos, createTodo, deleteTodo, updateTodo } from './api'
// import useApi from './hooks/api';

import '@rmwc/typography/styles';
import '@rmwc/list/styles';
import '@rmwc/top-app-bar/styles';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
 

  useEffect(() => {
    actions.getLists(dispatch)
  }, []);

  

  return (
   <DataContext.Provider value={{state, dispatch}} >
    <div className="App">

     <div className="page-content">
        <AppDrawer lists={state.lists} />

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
  </DataContext.Provider>
  );
}

export default App;
