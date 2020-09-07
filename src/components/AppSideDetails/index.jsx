import React from 'react'
import './index.scss';

import { IconButton } from '@rmwc/icon-button';


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
            <h4>{selectedTodo.title}</h4>
            </div>
             
           
           <hr/>
      </div>
    )
}