import React, {useContext, useState, useEffect} from 'react'

//import DBContext from '../context/db';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm';
import AppSideDetails from '../components/AppSideDetails';

import useApi from '../hooks/api';


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
    const [loading, setLoading] = useState(true);
    //console.log(match)
    //const db = useContext(DBContext);
    const  {data: {lists, todos}, actions } = useApi();

    // const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
    
        if (match.params.listId) {
            actions.getListTodos(match.params.listId).then(()=> {
                if( todos.length !== 0 ) { setLoading(false) }
            })
        } else {
            actions.getTodos()
            if( todos.length !== 0 ) { setLoading(false) }
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


    const list = lists.find(list => list.id === match.params.listId);

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