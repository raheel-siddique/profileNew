import React, { useState } from 'react'
import "./Skills.css"
interface DataSkills{
    img:string
    headSkills:string
}
export default function Skills() {
    const [skillsData, setSkillsData]=useState<DataSkills[]>([{ img:"\download.png", headSkills:"HTML"},
    { img:"\CSS3_logo_and_wordmark.svg.png", headSkills:"CSS"},
    { img:"\img_js.png", headSkills:"Javascript"},
    { img:"bootsrap.jpg", headSkills:"Bootstrap"},
    { img:"\Why-we-use-ReactJS-for-our-projects-Illustration.jpg", headSkills:"REACT Js"},
    { img:"\download (1).png", headSkills:"React Redux"},
    { img:"toolkit.jfif", headSkills:"Redux Toolkit"},
    { img:"\mui.png", headSkills:"Material Ui"},
    { img:"bigstock-Real-Java-Script-Code-Developi-217215433.jpg", headSkills:"Typescript"},
    { img:"firebase.png", headSkills:"Firebase"},
    { img:"\media-query-work-css.png", headSkills:"Media Querry"},
    { img:"\ecma.png", headSkills:"Ecmascript"},
    { img:"\guthub.jfif", headSkills:"Github"},
    { img:"tailwand.jfif", headSkills:"Tailwind Css"}


])
  return (
    <div>
        <div className="container mb-5">
           
            <div className="row rowofskills mb-5 gap-4 ">
            <h1 className="headskills">
                Skills
                </h1>
                {skillsData.map((data)=>{
                    return(
                        <>
                                <div className="card ml-5 mb-3 allskillsbox " style={{width:220,height:200, marginLeft:35}}>
  <div className="card-body">
      <img src={data.img} alt="" className='img-fluid skillsimg' />

    <h6 className="card-subtitle headofskills" >{data.headSkills.slice(0,2)}<span className='card-subtitle headofskills1'>{data.headSkills.slice(2)}</span> </h6>
   
   
  </div>
</div>
                        </>
                    )
                })}
            {/* <div className="card ml-5" style={{width:200, marginLeft:80}}>
  <div className="card-body">
      <img src="\download.png" alt="" className='img-fluid skillsimg' />

    <h6 className="card-subtitle headofskills" >HT<span className='card-subtitle headofskills1'>ML</span> </h6>
   
   
  </div>
</div> */}
</div>
            </div>
    </div>
  )
}
