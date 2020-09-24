import React from 'react'
import './index.scss';

import { IconButton } from '@rmwc/icon-button';

import  {TextField} from '@rmwc/textfield'
import TodoList from '../TodoList/TodoList';

export default function AppSideDetails({selectedTodo, onClose}) {

    return (
        <div className='todo-details'>
            <div className="todo__details-header">
            <h3>Детали задачи</h3>
            <IconButton 
                onClick={onClose}
                icon="close" 
                label="close!"
                className="icon-close"
                 />
            </div>
            <div className="todo__details-title">
            {/* <h4>{selectedTodo.title}</h4> */}

            <TextField  
                value={selectedTodo.title}
                onChange={()=>{}}
                fullwidth
                required
                label="" />

                <TextField 
                type="date-local"
                value={selectedTodo.dueDate}
                onChange={()=>{}}
                fullwidth
                required
                label="Дата выполнения" />

            </div>
             
           
            <h4>Шаги</h4>
        { selectedTodo.steps && selectedTodo.steps.length > 0 && 
            selectedTodo.steps.map((step, index) =>  <li>{step}</li>) 
        }

                <TextField  
                value={''}
                onChange={()=>{}}
                fullwidth
                required
                label="Добавить" />

           
      </div>
    )
}