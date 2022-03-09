import React from 'react'
 interface slillsArrayProps{
   skillsData:any;
 
 }
const ContentSkills=({skillsData}:slillsArrayProps) =>{
  return (
    <div>

<div className="container mb-5">
           
           <div className="row rowofskills mb-5 gap-4 ">
           <h1 className="headskills">
               Skills
               </h1>
               {skillsData.map((data:any)=>{
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
export default ContentSkills