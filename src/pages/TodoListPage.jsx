import React, {useContext, useState, useEffect} from 'react'

//import DBContext from '../context/db';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm';
import AppSideDetails from '../components/AppSideDetails';

//import useApi from '../hooks/api';
import DataContext from '../context/store';

import {actions} from '../store'


import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/styles';
import { TopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
// import { 
//     Drawer,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerSubtitle,
//     DrawerContent,
//     DrawerAppContent

        
// } from '@rmwc/drawer';
// import '@rmwc/drawer/styles';

export default function TodoListPage ({match}) {
    
   
    const {state, dispatch} = useContext(DataContext);

    //const  {data: {lists, todos}, actions } = useApi();

    // const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
    
        if (match.params.listId) {
            actions.getListTodos(match.params.listId, dispatch)
        } else {
            actions.getTodos(dispatch)
        }
        
    }, [dispatch, match.params.listId]);
    
    

    function handleSubmit(title) {
        actions.createTodo({
            title,
            listId: list.id
        });
    }

    function handleDelete (todoId) {
        actions.deleteTodo(todoId, dispatch)
    }


    function handleUpdate (todoId, data) {
        actions.updateTodo(todoId, data, dispatch)
    }

    function handleSelect (todo) {
        setSelectedTodo(todo)
    }

    const list = state.lists.find(list => list.id === match.params.listId);

    if (!list || !state.todos) return  <div><CircularProgress /> Loading...</div>
    
    return (
        <div className="page">
             <TopAppBar>
                 
             <h2> {list.title}</h2>
                    
                </TopAppBar>
                <TopAppBarFixedAdjust />
                
          <div className="todo__list-wrapper">
                
            <div className="todo__list-block">
                
                <TodoList
                        todos={state.todos}
                        list={list}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                        onSelect={handleSelect}
                    />
               
           
            
                <TodoForm
                    onSubmit={handleSubmit}
                />
            </div>
            {selectedTodo && 
                <AppSideDetails 
                    selectedTodo={selectedTodo}
                    onClose={() => setSelectedTodo(null)}
                />
            }
        </div>
        
        </div>
    )
}