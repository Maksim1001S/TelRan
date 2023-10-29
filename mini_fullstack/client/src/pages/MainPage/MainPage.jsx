import React from 'react'
import UsersContainer from '../../components/UsersContainer/UsersContainer'
import AddUser from '../../components/AddUser/AddUser'
import DeleteForm from '../../components/DeleteForm/DeleteForm'

const MainPage = () => {
  return (
    <div>
        <UsersContainer />
        <AddUser />
        <DeleteForm />
    </div>
  )
}

export default MainPage