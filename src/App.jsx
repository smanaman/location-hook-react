import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contanct from './pages/Contanct'
import Form from './pages/Form'
import Showcard from './pages/Showcard'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
 

  return (
 <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/contanct' element={<Contanct/>}/>
  <Route path='/form' element={<Form/>}/>
  <Route path='/showcard' element={<Showcard/>}/>
  <Route path='/edit' element={<Edit/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
 </BrowserRouter>
 </>
  )
}

export default App
