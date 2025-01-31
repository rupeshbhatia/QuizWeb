import { Formik ,Form,Field} from 'formik'

import React, { useState } from 'react'
import RedErrorMsg from './RedErrorMsg'
import { Button, Container,Col,Row,Image } from 'react-bootstrap'
import *  as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Authcontext'
function SignIn() {
 let navigate= useNavigate()

 const { login } = useAuth();


  let validations=yup.object({

    email:yup.string().email().required(),
    password:yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,"enter valid password"),

  })
    const loginData=async(val)=>{
      let {email,password}=val
          let result=await fetch("http://localhost:8080/login",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
        },
        body:JSON.stringify({email,password})
      })
      result=await result.json()
      console.log(result)
    
      if(result.token&&result.result.role==1){
        localStorage.setItem("user",JSON.stringify(result.result))
        localStorage.setItem("token",JSON.stringify(result.token))
         login()
       navigate("/admin/dash")
       
      }
      else if(result.token&&result.result.role==2){
        localStorage.setItem("user",JSON.stringify(result.result))
        localStorage.setItem("token",JSON.stringify(result.token))
        
        login()
       navigate("/user")
      }
      else{
        alert("please enter correct details")
      }
    }
  return (
      <Container  fluid className='p-5' style={{backgroundImage:`url(banner.jpg)`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",width:"100%",backgroundPosition:"right"}}>
        <Row className='d-flex align-items-center justify-content-center' >
        
    <Col lg={4}>
        <Formik  validationSchema={validations}
        initialValues={{email:"",password:""}}
        onSubmit={(values,action)=>{
        
        loginData(values)
          action.resetForm()
        }}>
            <Form className='p-4 ms-3 ' style={{backgroundColor:"rgb(23, 23, 23,.4"}}>
             <h2> Sign In</h2>
             <br />
        <Field type="email" placeholder="Enter your Email" name="email" className='form-control '/>
      <br />
      <RedErrorMsg name='email'/>
      <br />

      <Field type="Password" placeholder="Create Password" name="password"  className='form-control'/>
      <br />
      <RedErrorMsg name='password'/>
      <br />


      <Button type='submit' className='form-control'>Sign Up</Button>
      <br />
      </Form>
      </Formik>
      </Col>
      </Row>
    </Container>
  )
}

export default SignIn