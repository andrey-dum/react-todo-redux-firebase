import React, {useContext, useState, useEffect} from 'react'

import DBContext from '../context/db';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm';

import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/styles';


export default function TodoListPage ({match}) {
    const [loading, setLoading] = useState(true);
    //console.log(match)
    const db = useContext(DBContext);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        //setTodos();

        db.getListTodos(match.params.listId).then(setTodos)
        setLoading(false)
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


    const list = db.lists.find(list => list.id === match.params.listId);

    if (!list) return <h2>В этом списке задач нету!</h2>
    
    return (
        <div className="page">
               
           { loading ?  <div><CircularProgress /> Loading...</div> : 
            <TodoList
                todos={todos}
                list={list}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            />
        } 
            <TodoForm
                onSubmit={handleSubmit}
             /> 

          
        </div>
    )
}