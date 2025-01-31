import React, { useState } from 'react'
import * as yup from 'yup'
import {Form, Formik,Field}from 'formik'
import RedErrorMsg from './RedErrorMsg'
import  Button  from 'react-bootstrap/Button'
import {  Container} from 'react-bootstrap'
// import './Home.css'
// import quiz from '../images/quiz.jpg'
import { useNavigate } from 'react-router-dom'
function Home() {
 let navigate= useNavigate()
// const [data,setData]=useState({})

let validations=yup.object({
  name:yup.string().required(),
  email:yup.string().email().required(),
  password:yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,"enter strong password"),
  cnfpassword:yup.string().required("confirm password is required").oneOf([yup.ref('password')],"both password must match"),
  role:yup.string().required()
})
let register=async(val)=>{
let {name,email,password,role}=val

let result=await fetch('http://localhost:8080/register',{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"

  },
  body:JSON.stringify({name,email,password,role})
})
result=await result.json()
console.log(result)
      if(result.msg){
        alert(result.msg)
navigate("/signin")
      }
else if(result.result.role==1){
        setTimeout(()=>{
          alert("sign up succesfully as admin")
      localStorage.setItem("user",JSON.stringify(result.result))
      localStorage.setItem("token",JSON.stringify(result.token))
navigate("/admin/dash")
        },1000) 
      }
      else{
        setTimeout(()=>{
          alert("sign up succesfully ")
      localStorage.setItem("user",JSON.stringify(result.result))
      localStorage.setItem("token",JSON.stringify(result.token))

navigate("/user")
        },1000) 

      }
      
}

  return (
 <Container fluid style={{backgroundImage:`url(banner.jpg)`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",width:"100%",backgroundPosition:"right"}}>
    <Container className=' d-flex flex-wrap gap-4 justify-content-center align-items-center  '>
   
      <Formik
        validationSchema={validations}
        initialValues={{name:"",email:"",password:"",cnfpassword:"",role:""}}
        onSubmit={(values,action)=>{
          // console.log(values)
          // setData(values)
          register(values)
          action.resetForm()
        }}
    >
        <Form className='  form-group col-lg-4 mb-0 col-sm-12 mt-5'>
          <h2 className='fw-bold'>Sign Up </h2>
      <p>Create your Free Account in Simple Steps</p>
      <br />
      <Field type="text" placeholder="Enter your Name" name="name" className='form-control'/>
      
      <RedErrorMsg name='name'/>
      <br />

      <Field type="email" placeholder="Enter your Email" name="email"className='form-control'/>
      
      <RedErrorMsg name='email'/>
      <br />

      <Field type="Password" placeholder="Create Password" name="password" className='form-control'/>
      
      <RedErrorMsg name='password'/>
      <br />

      <Field type="Password" placeholder="Confirm  Password" name="cnfpassword" className='form-control'/>
      <br />
      <RedErrorMsg name='cnfpassword'/>
      <div className='d-flex gap-2'>
      {/* <Field type="radio"  name="role" value='1' />Admin */}
      <Field type="radio"  name="role" value='2'/>Student
    
      </div>
      
      <RedErrorMsg name='role'/>
      <br />

      <Button className='btn btn-primary' type='submit' >Sign Up</Button>
      <Field type="button"   value="Login" className='ms-2 btn bg-warning text-white' onClick={()=>navigate('/signin')}/>
      <br />
      
    
        </Form>
        </Formik>

      <div className="image col-lg-6 " style={{backgroundImage:'./'}}>
        {/* <img src={quiz} alt="img" /> */}
      </div>
    
      
        </Container>
        </Container>

  )
}

export default Home