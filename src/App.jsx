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


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
        <Route path='/' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route element={<RootLayOut />}>
          <Route path='/home' element={<Home />}/>
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
