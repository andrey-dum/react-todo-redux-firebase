import React, { useState } from 'react';
import './index.scss'

import  {TextField} from '@rmwc/textfield'
import  {Button} from '@rmwc/button'
import '@rmwc/textfield/styles';
import '@rmwc/button/styles';

function TodoForm ({ onSubmit }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

            onSubmit(title);
            setTitle('')
    }

    function handleChange(event) {
        setTitle(event.target.value)
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit} className="todo-form">
           
            <TextField  
                value={title}
                // onChange={(event) => setTitle(event.target.value)}
                onChange={handleChange}
                fullwidth
                required
                label="Текст заметки..." />
            <Button label="Добавить" raised />
        </form>
        </div>
    )
}

export default TodoForm;