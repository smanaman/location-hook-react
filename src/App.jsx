import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contanct from './pages/Contanct'
import Form from './pages/Form'
import Showcard from './pages/Showcard'
import Edit from './pages/Edit'


function App() {
 

  return (
 <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contanct' element={<Contanct/>}/>
  <Route path='/form' element={<Form/>}/>
  <Route path='/showcard' element={<Showcard/>}/>
  <Route path='/edit' element={<Edit/>}/>
</Routes>
 </BrowserRouter>
 </>
  )
}

export default App
