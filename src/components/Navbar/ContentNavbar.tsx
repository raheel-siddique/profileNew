import React from 'react'
import {NavLink} from "react-router-dom"
interface NavbarProps{
    show:boolean;
    toggleBtn:()=>void;
}

export default function ContentNavbar({show,toggleBtn}:NavbarProps) {
  return (
    <div>
      <section className='navbar-bg'>
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <NavLink className="navbar-brand" to="/"> <span className='myLogo'>Sidd<span className='seclogo'>ique</span></span> </NavLink>
    <button onClick={toggleBtn} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show":""} ` }  
    id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home"> <span className='listValues'>Home</span> </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about"><span className='listValues'>About</span> </NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services"><span className='listValues'>Skills</span> </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact"><span className='listValues'>Services</span> </NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/home"><span className='listValues'>Experience</span> </NavLink> 
        </li>
      
      
      </ul>
      <form className="d-flex">
         <NavLink to="/contact">
        <button className="btn btn-outline-success btn-style" type="submit">Contact</button>
        </NavLink>
      </form>
    </div>
  </div>
</nav>
</section>

    </div>
  )
}
