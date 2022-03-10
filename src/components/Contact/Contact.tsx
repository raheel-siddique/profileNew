
import React from 'react'


import "./Contact.css"
import ContentContact from './ContentContact';

const Contact=()=>{
    const initialValues = {
       name:"",
       email:"",
       description:"",
      };


     

  return (
    <div>
        <ContentContact initialValues={initialValues}   />

      

             {/* using formik */}
           








    </div>
  )
}
export default Contact
