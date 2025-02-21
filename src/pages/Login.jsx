import React, { useState,useEffect } from 'react'
import Header from '../Component/Header'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
function Login() {

  const [users, setuser] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    let login = JSON.parse(localStorage.getItem('userLogin'));
    if(login){
      navigate('/');
    }
  },[])
  const handlesubmit = (e) => {
    e.preventDefault();
    let login = users.find(val => val.email == email && val.password == password);

    if (login) {
    toast.success('login succesfully')
    localStorage.setItem('userLogin',JSON.stringify(login))
    setTimeout(() => {
        navigate('/form')
      }, 2000);

    } else {
   toast.error('invalid password')
    }
  }
  return (
    <>
      <Header />
     <h1 className='login-page'>login page</h1>
      <div className="login-main">
        <form className='form' onSubmit={handlesubmit}>
          <label>Name</label>
          <br />
          <input onChange={(e) => setname(e.target.value)} value={name} className='input' type="text" />
          <br />
          <label>Email</label>
          <br />
          <input onChange={(e) => setemail(e.target.value)} value={email} className='input' type="email" />
          <br />
          <label>Password</label>
          <br />
          <input onChange={(e) => setpassword(e.target.value)} value={password} className='input' type="password" />
          <br />
          <input className='input' id="submitButton" type="submit" defaultValue="Log in" />
          <br />
          <a href="#">Did you forget your password ?</a>
        </form>
      </div>
      <ToastContainer position="top-center"/>
    </>
  )
}

export default Login
