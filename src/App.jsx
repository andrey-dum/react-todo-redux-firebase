import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import AppDrawer from './components/AppDrawer/';
import AppContent from './components/AppContent/';

import DBContext from './context/db'


 import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';


//import { db } from './firebase'
import { getLists, getTodos, getListTodos } from './api'

//import '@material/button/dist/mdc.button.css';
import '@rmwc/card/styles';
import '@rmwc/typography/styles';
import '@rmwc/list/styles';
import '@rmwc/top-app-bar/styles';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {

  //get('todos').then(setLists)
   getLists().then(setLists)
   getTodos().then(setTodos)

  }, []);


  return (
    <DBContext.Provider value={{lists, todos, getTodos, getListTodos}}>
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

           <Route path="/:listId" component={TodoList} />
         </Switch>
             
    
  </AppContent>
      </div>
     
    </div>
  </DBContext.Provider>
  );
}

export default App;
