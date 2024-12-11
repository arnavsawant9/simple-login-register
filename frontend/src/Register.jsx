import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: '',
        password: ''
    })

    const handleregisterchange = (e) =>{
        const {name, value} = e.target;
        setRegisterData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }

    const handleregistersubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register/', registerData);
            console.log(response.data);
        } catch (error) {
            console.error('some error occured',error);
        }
    }
  return (
    <div>
        <h1>Login page</h1>
        <form onSubmit={handleregistersubmit}>
            <div>
                <p>Username</p>
                <input 
                placeholder='username'
                type='text'
                name='username'
                onChange={handleregisterchange}
                value={registerData.username}
                required
            />
            </div>
            <div>
                <p>Password</p>
                <input 
                placeholder='password'
                type='password' 
                name='password'
                onChange={handleregisterchange}
                value={registerData.password}
                required
                />
            </div>
            <button>Login</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
    </div>
  )
}

export default Register