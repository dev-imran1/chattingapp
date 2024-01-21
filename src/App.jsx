import { useState } from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import RootLayOut from './components/layouts/RootLayOut';
import Home from './pages/home/Home';
import Message from './pages/message/Message';
import Notification from './pages/notification/Notification';
import Setting from './pages/setting/Setting';


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
        <Route path='/' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route element={<RootLayOut />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/message' element={<Message />}/>
          <Route path='/notification' element={<Notification />}/>
          <Route path='/setting' element={<Setting />}/>
        </Route>
      </Route>
    ))

  return (
      <RouterProvider
        router={router}
      />
  )
}

export default App
