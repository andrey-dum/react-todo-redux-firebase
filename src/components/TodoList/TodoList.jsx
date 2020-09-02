import React, {useContext} from 'react'

import { 
    Card, CardPrimaryAction } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { ListDivider } from '@rmwc/list';
import '@rmwc/card/styles';

import DBContext from '../../context/db';

export default function ({match}) {
    console.log(match)

    const db = useContext(DBContext)

    return (
        <div>
            { db.todos.map(todo => (
                <Card key={todo.id} outlined style={{ width: '21rem' }}>
                <Typography
                use="subtitle1"
                tag="div"
                style={{ padding: '0.5rem 1rem' }}
                theme="textSecondaryOnBackground"
                >
                Headlines
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
                </Card>
            ) 
            ) }
        </div>
    )
}