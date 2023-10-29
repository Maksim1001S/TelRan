import React, { useEffect, useState } from 'react'
import "./App.css";
import { getAllUsers } from './requests/users_req';
import { Context } from './context';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import NavMenu from './components/NavMenu/NavMenu';


const App = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers(setUsers)
    }, [])
  return (
    <div>
      <NavMenu />
      <Context.Provider value={{ setUsers, users }}>
        <Routes>
          <Route  path='/' element={<MainPage/>}/>
          <Route  path='/auth' element={<AuthPage />}/>
        </Routes>
      </Context.Provider>
    </div>
  )
}

export default App