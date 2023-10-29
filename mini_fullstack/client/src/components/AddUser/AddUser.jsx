import React from 'react'
import { addUser, getAllUsers } from '../../requests/users_req';

const AddUser = ({set_users}) => {
    
    const submit = (e) => {
        e.preventDefault()
        const {firstname, lastname, age} = e.target;

        const user = {
            id: Date.now(),
            first_name: firstname.value,
            last_name: lastname.value,
            age: +age.value,
        }
        addUser(user)
        .then(() => {
            getAllUsers(set_users);
        })
        e.target.reset()
    }

  return (
    <form onSubmit={submit}>
        <input type="text" name='firstname' placeholder='firstname'/>
        <input type="text" name='lastname' placeholder='lastname'/>
        <input type="text" name='age' placeholder='age'/>
        <button>add</button>
    </form>
  )
}

export default AddUser;