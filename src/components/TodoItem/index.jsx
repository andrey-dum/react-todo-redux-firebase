import React, {useState} from 'react'

import { Typography } from '@rmwc/typography';

import { 
    ListItem, 
    ListItemGraphic,
    ListItemText,
    ListItemMeta
 } from '@rmwc/list';

import { IconButton } from '@rmwc/icon-button';
import '@material/icon-button/dist/mdc.icon-button.css';
import { Checkbox } from '@rmwc/checkbox';
import '@rmwc/checkbox/styles';

export default function TodoItem ({todo, onDelete}) {
    const [cheked, setChecked] = useState()

    return (
        <ListItem className="todo-list__item" onClick={e => e.stopPropagation()} >
            
            <Checkbox checked={todo.completed} /> 
             
             <ListItemText>
                {todo.title}
            </ListItemText>
            
            <ListItemMeta >
                <IconButton 
                icon="delete" 
                label="Rate this!"
                onClick={()=>onDelete(todo.id)}
                 />
            </ListItemMeta>
        </ListItem>
        
    );
}