import React from 'react'

const LoginUserForm = () => {
    const submit = (e) => {
        e.preventDefault()
        const { email, password} = e.target;

        const user = {
            email: email.value,
            password: password.value,
        }

        console.log(user);

        e.target.reset()
    }
  return (
    <form>
        Login
        <input type="text" name='email' placeholder='email'/>
        <input type="password" name='password' placeholder='password'/>
        <button>Login</button>
    </form>
  )
}

export default LoginUserForm