import React from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

interface InitialValuesProps{
    // name:string
    // email:string
    // description:string
    initialValues:{
        name:string;
        email:string
        description:string

    },

  
}
const ContentContact=({initialValues}:InitialValuesProps)=>{
    const onSubmit = async (values:any) => {
        console.log("form data" ,values)
        alert("data submitted ")
     };
     
     const validationSchema = Yup.object({
        name: Yup.string().required("Product name is Required"),
        email: Yup.string().required("email  is Required"),
       
      
        description: Yup.string().required("description is Required"),
    
       
      });

    return(
        <>
          <div className="container-fluid mb-5 mb-sm-5">
            <div className="row conatctdivs">
            <h1 className="contentheading mb-5">
            Contact
            </h1>
          
            <div className="col-12 col-lg-8 ">
                <img src="\Why-we-use-ReactJS-for-our-projects-Illustration.jpg" alt=""  className='img-fluid'/>
                </div>
            <div className="col-12 col-lg-4 formdiv">
                  <h1 className="loginhead">
                      Contact
                      </h1>
                      <br/>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                 <Form>
            <div className="mb-3">
 
            <input type="text" className="form-control textfld" id="exampleFormControlInput1" placeholder="username"  name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name} />
                          <div className="error">
                       <span className='erroemessageforall'> <ErrorMessage   name="name" component="div" /></span>
                      </div>
          </div>
                      <div className="mb-3 mt-3" >

            <input style={{marginTop:30}} type="email" className="form-control textfld" id="exampleFormControlInput1" placeholder="email" name='email'  onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}  />
                          <div className="error">
                          <span className='erroemessageforall'>  <ErrorMessage name="email" component="div" /></span>
                      </div>
          </div>
          <div className="mb-3">

            <textarea  style={{marginTop:60,borderRadius:10}} className="form-control mytextarae" id="exampleFormControlTextarea1" rows={3}  name="description" placeholder='Type Message'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}></textarea>
                          <div className="error">
                          <span className='erroemessageforall'><ErrorMessage name="description" component="div" /></span>
                      </div>
                     
          </div>
           
          <button className='btnconatctform' type='submit'>Send</button>
          </Form>
              )}
            </Formik>
                </div>

                </div>
            </div>
        </>
    )
}
export default ContentContact