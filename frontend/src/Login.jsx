import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const handleLoginSubmit = async(e) =>{
        e.preventDefault();
        try {
            console.log('doing...')
            const response = await axios.post('http://localhost:8000/login', loginData);
            console.log('Login successful:', response.data.message);
        } catch (error) {
            console.error('Error:', error);
            console.error('Some error occurred', error.response?.data || error.message);
        }

        setLoginData({
            username:'',
            password:''
        })
    }

    const handleloginchange = (e) =>{
        const {name, value} = e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }
  return (
    <div>
        <h1>Login page</h1>
        <form onSubmit={handleLoginSubmit}>
            <div>
                <p>Username</p>
                <input 
                placeholder='username'
                type='text'
                name='username'
                onChange={handleloginchange}
                value={loginData.username}
                required
            />
            </div>
            <div>
                <p>Password</p>
                <input 
                placeholder='password'
                type='password' 
                name='password'
                onChange={handleloginchange}
                value={loginData.password}
                required
                />
            </div>
            <button>Login</button>
            <p>Not registered yet?? <Link to='/register'>Register</Link></p>
        </form>
    </div>
  )
}

export default Login