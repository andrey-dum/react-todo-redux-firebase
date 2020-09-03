import React, {useContext, useState, useEffect} from 'react'

import './index.scss';

import '@rmwc/card/styles';

import DBContext from '../../context/db';
import TodoItem from '../TodoItem';
import { List } from '@rmwc/list';


import { Theme } from '@rmwc/theme';
import '@rmwc/theme/styles';

import { LinearProgress } from '@rmwc/linear-progress';
import '@rmwc/linear-progress/styles';



export default function TodoList ({match}) {
    const [todos, setTodos] = useState([]);
    //const [loading, setLoading] = useState(true);
    //console.log(match)
   
   
    const db = useContext(DBContext);

   

    useEffect(() => {
        db.getListTodos(match.params.listId).then(setTodos)
    }, [db, match.params.listId]);
    

    
    const list = db.lists.find(list => list.id === match.params.listId);

    if (!list) return <h2>В этом списке задач нету!</h2>
    console.log(todos)
    return (
        <div className="todo-list">
            <h2><Theme use="secondary">{list.title}</Theme></h2>
           
            <List className="todo-list__items">
                { todos.map(todo => (

                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        list={list}
                    />
                
                )) }
            </List>
          
         
            
        </div>
    )
}