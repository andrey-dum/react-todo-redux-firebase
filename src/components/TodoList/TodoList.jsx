import React from 'react'
import './index.scss';

import TodoItem from '../TodoItem';
import { List, ListDivider, } from '@rmwc/list';

export default function TodoList ({todos,list, onDelete, onUpdate}) {
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
                        onUpdate={onUpdate}
                    />
                
                )) }
            </List>
        </div>
    )
}