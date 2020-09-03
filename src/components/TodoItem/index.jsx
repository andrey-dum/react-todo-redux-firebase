import React from 'react'

import { 
    Card, CardPrimaryAction } from '@rmwc/card';
import { Typography } from '@rmwc/typography';

import '@rmwc/card/styles';

import { 
    ListItem, 
    ListItemGraphic,
    ListItemText,
    ListDivider,
    ListItemMeta
 } from '@rmwc/list';
import { Checkbox } from '@rmwc/checkbox';
import '@rmwc/checkbox/styles';

import DBContext from '../../context/db';

export default function TodoItem ({todo, list}) {
    return (
        <div >
           
                <ListItem className="todo-list__item">
                    {todo.title}
                    <ListItemMeta>
                         <Checkbox  /> 
                    </ListItemMeta>
                </ListItem>
                <ListDivider />
           
           {/* <Card key={todo.id} outlined style={{ width: '21rem' }}>
                <Typography
                use="subtitle1"
                tag="div"
                style={{ padding: '0.5rem 1rem' }}
                theme="textSecondaryOnBackground"
                >
                {list.title}
                </Typography>

                <ListDivider component="hr" />

                <CardPrimaryAction>
                <div style={{ padding: '1rem' }}>
                    <Typography use="headline5" tag="div">
                    {todo.title}
                    </Typography>
                    <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
                    {todo.text}
                    </Typography>
                </div>
                </CardPrimaryAction>
            </Card> */}
          
        </div>
    )
}