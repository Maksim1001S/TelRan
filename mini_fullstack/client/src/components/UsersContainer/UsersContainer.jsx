import React, { useContext } from 'react'
import UserCard from '../UserCard/UserCard';
import { Context } from '../../context';

const UsersContainer = () => {
  const {users} = useContext(Context)
  return (
    <div>
        {
            users.map(el => <UserCard key={el.id} {...el}/>)
        }
    </div>
  )
}

export default UsersContainer;