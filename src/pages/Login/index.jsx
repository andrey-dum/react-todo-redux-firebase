import React, {useState} from 'react'


import {reducer, initialState, actions} from '../../store'


export default function LoginPage () {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        actions.loginUser(login, password)

        setLogin('')
setPassword('')
    }
function handleExitButtonClick () {
    actions.signOutUser()
}
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                    required
                />
                <input 
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <button type="submit">Login</button>
                
            </form>
            <button onClick={handleExitButtonClick}>Log Out</button>
        </div>
    )
}