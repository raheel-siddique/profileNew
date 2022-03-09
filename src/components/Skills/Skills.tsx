import React, { useState } from 'react'
import ContentSkills from './ContentSkills'
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
     <ContentSkills skillsData={skillsData} />
    </div>
  )
}
