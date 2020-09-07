import React, {useContext, useState, useEffect} from 'react'

import DBContext from '../context/db';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm';
import AppSideDetails from '../components/AppSideDetails';

import useApi from '../context/db';


import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/styles';
import { TopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import { 
    Drawer,
    DrawerHeader,
    DrawerTitle,
    DrawerSubtitle,
    DrawerContent,
    DrawerAppContent

        
} from '@rmwc/drawer';
import '@rmwc/drawer/styles';

export default function TodoListPage ({match}) {
    const [loading, setLoading] = useState(true);
    //console.log(match)
    const db = useContext(DBContext);

    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
    
        if (match.params.listId) {
            db.getListTodos(match.params.listId).then(setTodos).then(()=> {
                if( todos.length !== 0 ) { setLoading(false) }
            })
        } else {
            db.getTodos().then(setTodos)
            if( todos.length !== 0 ) { setLoading(false) }
        }
        
        
    }, [db, match.params.listId]);
    
    

    function handleSubmit(title) {
        db.createTodo({
            title,
            listId: list.id
        }).then(todo => {setTodos([...todos, todo])});
    }

    function handleDelete (todoId) {
        db.deleteTodo(todoId).then(todoId => {
            setTodos([...todos.filter(t => t.id !== todoId)])
        });
    }


    function handleUpdate (todoId, data) {
        db.updateTodo(todoId, data).then(data => {
            //setTodos([...todos.map(t => t.id !== todoId ? ({ ...t, ...data, }) : t)])
            //setTodos([...todos.map(t => t.id === todoId ? ({ ...t, ...data, }) : t)])
            //console.log(...todos.map(t => t))
        //  console.log({data})
        //  console.log(todoId)
        //  console.log(...todos.map(t => ({...t})))
            
        });
       
    }

    function handleSelect (todo) {
        setSelectedTodo(todo)
    }


    const list = db.lists.find(list => list.id === match.params.listId);

    if (!list || !todos) return <h2>В этом списке задач нету!</h2>
    
    return (
        <div className="page">
             <TopAppBar>
                 
             <h2> {list.title}</h2>
                    
                </TopAppBar>
                <TopAppBarFixedAdjust />
                
          <div className="todo__list-wrapper">
                
            <div className="todo__list-block">
                { loading && 
                <div><CircularProgress /> Loading...</div>
                } 
                { !loading && <TodoList
                        todos={todos}
                        list={list}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                        onSelect={handleSelect}
                    />
                }
           
            
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