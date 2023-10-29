import React, { useContext } from 'react'
import s from "./UserCard.module.css"
import { deleteUser, getAllUsers } from '../../requests/users_req'
import { Context } from '../../context'

const UserCard = ({id, first_name, last_name, age}) => {
  const {setUsers} = useContext(Context);
  const clickToDelete = () => {
    deleteUser({id})
      .then(() => {
        getAllUsers(setUsers);
      })
  }
  return (
    <div>
        <p className={s.close} onClick={clickToDelete}>x</p>
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{age}</p>
        <br/>
    </div>
  )
}

export default UserCard