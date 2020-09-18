import React from 'react'
import './index.scss';

import TodoItem from '../TodoItem';
import { List, ListDivider, } from '@rmwc/list';

export default function TodoList ({todos, list, onDelete, onUpdate, onSelect}) {
    return (
        <div className="todo-list">
           
            <List className="todo-list__items">
                { todos.map(todo => (

                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        list={list}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        onSelect={onSelect}
                    />
                
                )) }
            </List>
        </div>
    )
}