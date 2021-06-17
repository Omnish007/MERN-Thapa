import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from "react-router-dom"

import {UserContext} from "../App"

function Navbar() {

  const {state , dispatch} = useContext(UserContext)

  const RenderMenu = ()=>{
    if(state){
      return(
        <>
          <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            
            <li className="nav-item ">
              <NavLink className="nav-link" to="/logout">LogOut</NavLink>
            </li>
        </>
      )
    }
    else{
      return(
        <>
          <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/signup">Registration</NavLink>
            </li>
        </>
      )
    }
    
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <RenderMenu/>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
