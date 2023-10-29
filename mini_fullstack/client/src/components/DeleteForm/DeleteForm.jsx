import React, { useContext } from 'react'
import { deleteUser, getAllUsers } from '../../requests/users_req'
import { Context } from '../../context';

const DeleteForm = () => {
    const {setUsers} = useContext(Context); 
    const submit = (e) => {
        e.preventDefault()
        deleteUser({id: +e.target.id.value})
            .then(() => {
                getAllUsers(setUsers)
            })
        e.target.reset()
    }
  return (
    <form onSubmit={submit}>
        <input type="number" placeholder="id" name="id"/>
        <button>delete</button>
    </form>
  )
}

export default DeleteForm