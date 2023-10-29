import React from 'react'
import RegisterUserForm from '../../components/RegisterUserForm/RegisterUserForm'
import LoginUserForm from '../../components/LoginUserForm/LoginUserForm'

const AuthPage = () => {
  return (
    <div>
        <RegisterUserForm />
        <br/>
        <LoginUserForm />
    </div>
  )
}

export default AuthPage