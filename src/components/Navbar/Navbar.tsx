import React, { useState } from 'react'
import ContentNavbar from './ContentNavbar';
import "./Navbar.css";

export default function Navbar() {
    const [show, setShow]=useState<boolean>(false);
    const toggleBtn=()=>{
        if(show){
                setShow(false)
        }else{
            setShow(true)
        }
       
    }
  return (
      <>
       <ContentNavbar show={show} toggleBtn={toggleBtn}  />
      </>
    
  )
}
