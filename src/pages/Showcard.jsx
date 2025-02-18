import React from 'react'
import Header from '../Component/Header'
import './Showcard.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Showcard() {
  const [showdata, setshowdata] = useState(JSON.parse(localStorage.getItem('formdata')))
  const nav = useNavigate()

  return (
    <>
      <Header />
      <div className="card-main">
      {
        showdata.map((val, index) => (
          <div className="card" key={index}>
            <img src={val.src} alt="Product Image" className="card-image" />
            <h2 className="card-title">{val.Title}</h2>
            <p className="card-description">{val.Description}</p>
            <p className="card-price">{val.price}</p>
            <button className="edit-button" onClick={() => nav('/edit', { state: val })}>Edit</button>
          </div>
        ))
      }
      </div>
    </>
  );
}

export default Showcard
