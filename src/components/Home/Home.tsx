import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Home.css";
import { style } from '@mui/system';

export default function Home() {
  return (
    <div>
        <div className='container-fluid'>
            <div className="row homepagediv">
                <div className="col-12 col-lg-6 mt-5 p-5 homeleftside">
                    <h3 className="leftsec display-6 ">
                       Hi I 'm Raheel Siddique
                        </h3>
                        <ReactTypical
		steps={[ ' I m Web Designer', 1000,"red", ' I m Web Developer', 1000,' I m React Ts Developer', 1000,' I m React Js Developer', 1000]}
		loop={Infinity}
		wrapper="h1"
        style={{color:"red", marginTop:30, fontFamily:"sans-serif"}}
	/>
   <div className="btnsOfhome ">
       <ul className='iconslist'>
           <li><a href="#"><FacebookIcon style={{color:"rgb(147, 201, 248);"}} /></a></li>
           <li><a href="#"><GoogleIcon  style={{color:"rgb(147, 201, 248);"}} /></a></li>

           <li><a href="#"><InstagramIcon  style={{color:"rgb(147, 201, 248);"}} /></a></li>
           <li><a href="#"><YouTubeIcon  style={{color:"rgb(147, 201, 248);"}} /></a></li>

           

       </ul>
       <div className="homebtns">
   <button className='btn btn-outline-primary btn1 ' >Contact Me</button>
    <button className='btn btn-outline-danger btn1' style={{marginLeft:20}} >Get Resume</button></div>
    </div>
                    </div>
                <div className="col-12 col-lg-6 sect2div2">

                    </div>

                </div>
            </div>
    </div>
  )
}
