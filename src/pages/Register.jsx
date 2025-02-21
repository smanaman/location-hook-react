import React, { useState } from 'react'
import Header from '../Component/Header'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
function Register() {
  const [user,setuser]=useState(JSON.parse(localStorage.getItem('users'))||[])
   const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
const nevget=useNavigate()

  const handlesubmit=(e)=>{
e.preventDefault();
const obj={
  name,email,password
}
 
const newdata=[...user,obj]
setuser(newdata)
localStorage.setItem('users',JSON.stringify(newdata))
setname('')
setemail('')
setpassword('')
nevget('/login')
  }
  return (
    <>
      <Header/>
      <h1 className='login-page'>Register page</h1>

      <div className="login-main">
      <form className='form' onSubmit={handlesubmit}>
      <label>Name</label>
  <br />
  <input onChange={(e)=>setname(e.target.value)} value={name} className='input' type="text" />
  <br/>
  <label>Email</label>
  <br />
  <input onChange={(e)=>setemail(e.target.value)} value={email} className='input' type="email" />
  <br />
  <label>Password</label>
  <br />
  <input onChange={(e)=>setpassword(e.target.value)} value={password} className='input' type="password" />
  <br />
  <input className='input' id="submitButton" type="submit" defaultValue="Log in" />
  <br />
  <a href="#">Did you forget your password ?</a>
</form>
      </div>

    </>
  )
}

export default Register
