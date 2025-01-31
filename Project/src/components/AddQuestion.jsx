import React, { useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ViewTopic from './ViewTopic'
function AddQuestion({set}) {
  let [data,setData]=useState(false)
let[question,setQuestion]=useState("")
let[options,setOptions]=useState([])
let[answer,setAnswer]=useState("")
let [topic,setTopic]=useState("")
const [inputs, setInputs] = useState(['', '', '', '']);
// console.log(topic)
const handleInputChange = (index, event) => {
  const newInputs = [...inputs];
  newInputs[index] = event.target.value;
  setInputs(newInputs);
}
useMemo(() => {
  handleInputChange
}, [topic
]);

let api=async(e)=>{
  e.preventDefault()

  let result=await fetch("http://localhost:8080/question",{
  method:"POST",
  headers:{

    "Content-type":"application/json",
    "Accept":"application/json",
    authorization:JSON.parse(localStorage.getItem('token'))

  },
 
  body:JSON.stringify({question,inputs,answer,topic})
})
 result=await result.json()
 if(result){
  alert("questionAdded")
  setQuestion("")
  setAnswer("")
  setOptions([])
 }

}
  return (
<>
    <div className='bg-light d-flex flex-column w-100 py-3 mt-4 '>
    <form onSubmit={api} className='bg-white p-3 m-auto w-75 '>
      <h2>Add Questions</h2>
      <br />
      <label htmlFor="question" className='form-label'>Enter question</label>
<input type="text" name="question" value={question} onChange={(e)=>setQuestion(e.target.value)} className='form-control' placeholder='Question?'/>
<br />
<label htmlFor='options' className='form-label'>Enter Options</label>
{/* <input type="text" name="options" value={options} onChange={(e)=>setOptions(e.target.value)} className='form-control' placeholder='option1,option2,option3,option4'/>
<br /> */}

<div className='d-flex justify-content-between flex-wrap'>
{inputs.map((input, index) => (
        <div key={index} >
          <label>{`Option ${index + 1}:`}</label>
          <input
          className='form-control'
            type="text"
            value={input}
            onChange={(event) => handleInputChange(index, event)}
            
          />
        </div>
      ))}
      </div>
      <br />
<label htmlFor='answer' className='form-label'>Answer</label>
<input type="text" name="answer" value={answer} onChange={(e)=>setAnswer(e.target.value)} className='form-control' placeholder='answer'/>
<br />
<label htmlFor="topic">Select Topic</label>
<select name="topic" onChange={(e)=>setTopic(e.target.value)} className='form-control'>
<ViewTopic/>

</select>
<br />
<br />
<button className='btn btn-primary' type='submit'>Submit</button>

    </form>
    <p className='text-danger text-center'>if topic for the quiz is not exist then click on add topic</p>
<button className='btn btn-warning m-auto'  onClick={()=>set(true)}>Add Topic</button>
   

    </div>
          
          <div>
            
          </div>
          </>   
  )
}

export default AddQuestion