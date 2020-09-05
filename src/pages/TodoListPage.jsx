import React, {useContext, useState, useEffect} from 'react'

import DBContext from '../context/db';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm';

import { LinearProgress } from '@rmwc/linear-progress';
import '@rmwc/linear-progress/styles';


export default function TodoListPage ({match}) {
    //const [loading, setLoading] = useState(true);
    //console.log(match)
    const db = useContext(DBContext);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        //setTodos();

        db.getListTodos(match.params.listId).then(setTodos)
    }, [db, match.params.listId]);
    
    const list = db.lists.find(list => list.id === match.params.listId);

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

    if (!list) return <h2>В этом списке задач нету!</h2>
    
    return (
        <div className="page">
               
           
            <TodoList
                todos={todos}
                list={list}
                onDelete={handleDelete}
            />

            <TodoForm
                onSubmit={handleSubmit}
             /> 

          
        </div>
    )
}