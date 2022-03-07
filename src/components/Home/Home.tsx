import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Home.css";

export default function Home() {
  return (
    <div>
        <div className='container-fluid'>
            <div className="row homepagediv">
                <div className="col-12 col-lg-6">
                    <h2 className="leftsec display-7">
                       Hi I am Raheel Siddique
                        </h2>
                        <ReactTypical
		steps={['Hello I Am Web Designer', 1000, 'Hello I Am Web Developer', 2000,'Hello I Am React Ts Developer', 2000,'Hello I Am React Js Developer', 2000]}
		loop={Infinity}
		wrapper="h1"
	/>
   <div className="btnsOfhome ">
       <ul className='iconslist'>
           <li><a href="#"><FacebookIcon style={{color:"white"}} /></a></li>
           <li><a href="#"><GoogleIcon  style={{color:"white"}} /></a></li>

           <li><a href="#"><InstagramIcon  style={{color:"white"}} /></a></li>
           <li><a href="#"><YouTubeIcon  style={{color:"white"}} /></a></li>

           

       </ul>
   <button className='btn btn-outline-light rounded ' >Contact Me</button>
    <button className='btn btn-outline-danger ' style={{marginLeft:20}} >Get Resume</button></div>
    
                    </div>
                <div className="col-12 col-lg-6">
                <h1 className="rightsec">
                    Rasim
                        </h1>
                    </div>

                </div>
            </div>
    </div>
  )
}
