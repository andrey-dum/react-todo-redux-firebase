import React, {useContext, useState, useEffect} from 'react'

import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm';
import AppSideDetails from '../components/AppSideDetails';
import AppHeader from '../components/AppHeader';

import useStore from '../hooks/store';


import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/styles';


export default function TodoListPage ({match}) {
   
    const { state, actions } = useStore();

    const [selectedTodo, setSelectedTodo] = useState(null);
    //const [sortBy, setSortBy] = useState('');


    function handleSubmit(title) {
        actions.createTodo({
            title,
            listId: list.id || '',
            userId: state.user.uid,
            dueDate: new Date()
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
    
    
    function handleSortChange (sort) {
        //setSortBy(sort)
        actions.updateList(list.id, {sort})
    }

    

    const list = state.lists.find(list => list.id === match.params.listId) || { title: 'Задачи' };
    const path = match.path;

    const getTodosByFilter =({
        '/': todos => todos,
        '/important': todos => todos.filter(todo => todo.important),
        '/planned': todos => todos.filter(todo => todo.dueDate)
    });

    const getTodosByList = (listId, todos) => todos.filter(todo => todo.listId === listId);


    const sortFn = {
        title: (a, b) => a.title.localeCompare(b.title),
        date: (a, b) => new Date(a.seconds * 1000) - new Date(b.seconds * 1000),
        important: (a, b) => b.important - a.important,
        completed: (a, b) => b.completed - a.completed,
    }

    const todos = match.params.listId 
        ? getTodosByList(match.params.listId, state.todos)
        : getTodosByFilter[path](state.todos);
        
        const sortedTodos = list.sort ? todos.slice().sort(sortFn[list.sort]) : todos;
      
    if (!list || !state.todos) return  <div><CircularProgress /> Loading...</div>
    
    return (
        <div className="page">

            <AppHeader 
            
                title={list.title}
                sortBy={list.sort}
                onSortChange={handleSortChange}
            
            
            />
             {/* <TopAppBar>
                 
             <h2> {list.title}</h2>
                    
                </TopAppBar>
                <TopAppBarFixedAdjust /> */}
                
          <div className="todo__list-wrapper">
                
            <div className="todo__list-block">
                
                <TodoList
                        todos={sortedTodos}
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