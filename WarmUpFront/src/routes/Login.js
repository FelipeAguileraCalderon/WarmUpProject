import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'

const style = {
    color: {
        color: "white"
    }
}

export const Login = () => {

    const { login } = useAuth()

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        login(user.email, user.password).then(() => navigate('/home'))
    }

  return (
    <div style={style.color}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>email:</label>
            <input is='email' name='email' type="email" onInput={handleChange}/>
            <label>password:</label>
            <input id='password' name='password' type="password" onInput={handleChange}/>
            <input type="submit" value="Iniciar sesion"/>
        </form>
    </div>
  )
}
