import React, {useContext, useState, useEffect} from 'react'


import DBContext from '../context/db';
import TodoList from '../components/TodoList/TodoList';

import '@rmwc/linear-progress/styles';


export default function Home () {

    const db = useContext(DBContext);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        db.getTodos().then(setTodos)
    }, []);
    
    return (
        <div className="page">
           {todos.map(item => <li>{item.title}</li>)}
        </div>
    )
}