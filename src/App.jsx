import React, {useState, useEffect, useReducer, useMemo} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import AppDrawer from './components/AppDrawer/';
import AppContent from './components/AppContent/';

import TodoListPage from './pages/TodoListPage';
import LoginPage from './pages/Login';


import useStore from './hooks/store';

import '@rmwc/typography/styles';
import '@rmwc/list/styles';
import '@rmwc/top-app-bar/styles';

function App() {
 
  const { state, actions } = useStore();

  useEffect(() => {
    actions.getLists();
    actions.initAuth();
    //actions.setAuth(dispatch);
    
  }, []);

  console.log(state)

  if (!state.user) return <LoginPage />;

  return (

    <div className="App">

     <div className="page-content">
        <AppDrawer lists={state.lists} />

        <AppContent>
         <Switch>
         
           <Route exact path="/" component={TodoListPage} />
           <Route exact path="/planned" component={TodoListPage} />
           <Route exact path="/login" component={LoginPage} />
           <Route exact path="/important" component={TodoListPage} />
           <Route exact path="/:listId/:todoId?" component={TodoListPage} />
         </Switch>
        </AppContent>
        
      </div>
     
    </div>

  );
}

export default App;
