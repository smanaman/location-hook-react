import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Edit() {
  const loc = useLocation()

  let navigate = useNavigate("");
  const [src, setsrc] = useState("")
  const [Title, setTitle] = useState("")
  const [price, setprice] = useState("")
  const [Description, setDescription] = useState("")
  const [edit, setedit] = useState("")
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('formdata'))||[]);

  useEffect(() => {
    setsrc(loc.state.src)
    setTitle(loc.state.Title)
    setprice(loc.state.price)
    setDescription(loc.state.Description)
    setedit(loc.state.id)
  }, [loc.state])

  const hadlesubmit = (e) => {
    e.preventDefault()

    let up = posts.map((val) => {
      if (val.id == edit) {
        val.Title = Title
        val.src = src
        val.Description = Description
        val.price = price
      }
      return val
    })
    localStorage.setItem('formdata', JSON.stringify(up))
setTimeout(() => {
  navigate('/showcard')
}, 2000);
 
    setsrc('')
    setTitle('')
    setprice('')
    setDescription('')


  }
  return (
    <>
      <Header />
      <div className="body">
        <div className="form-container">
          <h2>Edit Product</h2>
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

export default Edit
