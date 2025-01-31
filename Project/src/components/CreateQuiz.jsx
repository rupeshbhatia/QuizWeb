import { Form,Formik,Field, ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import RedErrorMsg from './RedErrorMsg'
import * as yup from'yup'
import AddQuestion from './AddQuestion'
function CreateQuiz({prev}) {
  let[length,setLength]=useState("")

  let[click,setClick]=useState(false)
let validations=yup.object({
    name:yup.string().required("Please enter a topic"),
})
let handleData=async(val)=>{
    let {name}=val
let result=await fetch("http://localhost:8080/createTopic",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
  
    },
    body:JSON.stringify({name})
  })
  result=await result.json()
if(result){
    alert("topic added")
    handleData()
    setClick(false)
    
}
else{
    alert("topic not added")
   
}

}



  return (
    <>


{/* <button className='btn btn-warning'onClick={()=>setClick(true)}>Add Topic</button> */}


<div>{click?
    <Formik validationSchema={validations}
     initialValues={{name:""}}
     onSubmit={(values,action)=>{
         handleData(values)
         console.log(values)
       action.resetForm()
     }}
    >

<Form className='bg-white d-flex flex-column w-50 justify-content-center align-items-center m-auto mt-5 mb-5 p-4'>
<h2>Enter Quiz Topic</h2>
<p>If the topic is not Exist in list then Create new topic.</p>

<br />
<Field type="text" name="name"/>
<RedErrorMsg  name="name"/>
<br />
<Field type="submit" value="Submit" className="btn btn-primary"/>
</Form>

    </Formik>
  :<AddQuestion set={setClick}/>
 

}
</div>
    </>

  )
}

export default CreateQuiz