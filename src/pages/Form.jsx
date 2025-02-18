import React from 'react'
import Header from '../Component/Header'
import './Form.css'
import { useState } from 'react'
function Form() {
  const [src, setsrc] = useState("")
  const [Title, setTitle] = useState("")
  const [price, setprice] = useState("")
  const [Description, setDescription] = useState("")
  const [alldata, setalldata] = useState(JSON.parse(localStorage.getItem('formdata')) || [])
  const hadlesubmit = (e) => {
    e.preventDefault()
    const obj = {
      id: Math.floor(Math.random() * 10),
      src: src,
      Title: Title,
      price: price,
      Description: Description
    }
    setalldata([...alldata, obj])
    setsrc('')
    setTitle('')
    setprice('')
    setDescription('')

  }
  localStorage.setItem("formdata", JSON.stringify(alldata))

  return (
    <>
      <Header />

      <div className="body">
        <div className="form-container">
          <h2>Add Product</h2>
          <form onSubmit={(e) => hadlesubmit(e)}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter product title"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="src">Image Source (URL)</label>
              <input
                type="url"
                id="src"
                name="src"
                placeholder="Enter image URL"
                value={src}
                onChange={(e) => setsrc(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter product description"
                rows={4}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
