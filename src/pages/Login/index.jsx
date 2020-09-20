import React, {useState} from 'react'
import './index.scss'

import {reducer, initialState, actions} from '../../store'


import  {TextField} from '@rmwc/textfield'
import  {Button} from '@rmwc/button'



export default function LoginPage () {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // function handleLogInButtonClick () {
    //     actions.loginUser(login, password)

    //     setLogin('')
    //     setPassword('')
    // }

    function handleLogInButtonClick() {
        if (login && password) {
            actions.loginUser(login, password)
                .catch(error => setError(error.message));
        }
    }

    function handleRegisterButtonClick() {
        if (login && password) {
            actions.registerUser(login, password)
                .catch(error => setError(error.message));
        }
    }

    return (
        <div className="form__page">
            <div className="form__wrapper">
                <h1>Auth Form</h1>

                {error &&
                    <div className="form__error">{error}</div>
                }


                <form onSubmit={handleSubmit}>

                    <TextField 
                        type="email"
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                        required
                        label="Login"
                    />
                    <TextField 
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        label="password"
                    />
                      <Button onClick={handleLogInButtonClick} label="Вход" raised />
                      <Button onClick={handleRegisterButtonClick} label="Регистрация" raised />
                    {/* <button type="submit">Login</button> */}
                    
                </form>
            </div>
           
        </div>
    )
}