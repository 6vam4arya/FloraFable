import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    // some name already in local Storage, assuming it to be user
    const name = localStorage.getItem('name');
    if (name) {
      setUser(name);
    }
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    setUser('');
    navigate('/');
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FloraFable</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/About">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Gallery">Gallery</a>
              </li>

              {/* if user name is not present in local storage, show this : - */}
              {!user && (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/LogIn">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/SignUp">SignUp</a>
                  </li>
                </>

              )}

              {/* if user name is present in local storage, show this : - */}
              {user && (
                <>
                  <li className='nav-item'> <a className="nav-link active welcomebtn" aria-current="page">Welcome, {user}</a></li>
                  <button className='nav-item btn btn-outline-success logout' onClick={handleLogOut}>LogOut</button>

                </>)}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default navbar