import React from 'react'
import './index.scss';

import TodoItem from '../TodoItem';
import { List, ListDivider, } from '@rmwc/list';

import { LinearProgress } from '@rmwc/linear-progress';
import '@rmwc/linear-progress/styles';


export default function TodoList ({todos,list, onDelete}) {
    return (
        <div className="todo-list">
            <h2>{list.title}</h2>
           
            <List className="todo-list__items">
                { todos.map(todo => (

                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        list={list}
                        onDelete={onDelete}
                    />
                
                )) }
            </List>
        </div>
    )
}