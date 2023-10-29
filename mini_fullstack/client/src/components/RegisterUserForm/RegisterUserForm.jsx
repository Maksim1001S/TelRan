import React from 'react'
import { RegisterUser, addUser } from '../../requests/auth_req';

const RegisterUserForm = () => {
    const submit = (e) => {
        e.preventDefault()
        const {userName, email, password} = e.target;

        const user = {
            id: Date.now(),
            userName: userName.value,
            email: email.value,
            password: password.value,
        }

        RegisterUser(user)
        console.log(user);

        e.target.reset()
    }
  return (
    <form onSubmit={submit}>
        Register
        <input type="text" name='userName' placeholder='user name'/>
        <input type="text" name='email' placeholder='email'/>
        <input type="password" name='password' placeholder='password'/>
        <button>Register</button>
    </form>
  )
}

export default RegisterUserForm