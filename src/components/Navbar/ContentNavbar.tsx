import React from 'react'
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
    <a className="navbar-brand" href="#"> <span className='myLogo'>Sidd<span className='seclogo'>ique</span></span> </a>
    <button onClick={toggleBtn} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show":""} ` }  
    id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <span className='listValues'>Home</span> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about"><span className='listValues'>About</span> </a> 
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className='listValues'>Skills</span> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className='listValues'>Services</span> </a> 
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className='listValues'>Experience</span> </a> 
        </li>
      
      
      </ul>
      <form className="d-flex">
       
        <button className="btn btn-outline-success btn-style" type="submit">Contact</button>
      </form>
    </div>
  </div>
</nav>
</section>

    </div>
  )
}
