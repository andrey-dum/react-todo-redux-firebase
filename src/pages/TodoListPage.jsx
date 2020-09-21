import React, {useContext, useState, useEffect} from 'react'

import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm';
import AppSideDetails from '../components/AppSideDetails';

import useStore from '../hooks/store';


import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/styles';
import { TopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';

export default function TodoListPage ({match}) {
   
    const { state, actions } = useStore();

    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
        if (match.params.listId) {
            actions.getListTodos(match.params.listId)
        } else {
            actions.getTodos()
        }
    }, [actions, match.params.listId]);
    
    

    function handleSubmit(title) {
        actions.createTodo({
            title,
            listId: list.id
        });
    }

    function handleDelete (todoId) {
        actions.deleteTodo(todoId)
    }


    function handleUpdate (todoId, data) {
        actions.updateTodo(todoId, data)
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