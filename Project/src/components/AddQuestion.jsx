// // import React, { useMemo, useState } from 'react'
// // import { Outlet } from 'react-router-dom'
// // import ViewTopic from './ViewTopic'
// // function AddQuestion({set}) {
// //   let [data,setData]=useState(false)
// // let[question,setQuestion]=useState("")
// // let[options,setOptions]=useState([])
// // let[answer,setAnswer]=useState("")
// // let [topic,setTopic]=useState("")
// // const [inputs, setInputs] = useState(['', '', '', '']);
// // // console.log(topic)
// // const handleInputChange = (index, event) => {
// //   const newInputs = [...inputs];
// //   newInputs[index] = event.target.value;
// //   setInputs(newInputs);
// // }
// // useMemo(() => {
// //   handleInputChange
// // }, [topic
// // ]);

// // let api=async(e)=>{
// //   e.preventDefault()

// //   let result=await fetch("http://localhost:8080/question",{
// //   method:"POST",
// //   headers:{

// //     "Content-type":"application/json",
// //     "Accept":"application/json",
// //     authorization:JSON.parse(localStorage.getItem('token'))

// //   },
 
// //   body:JSON.stringify({question,inputs,answer,topic})
// // })
// //  result=await result.json()
// //  if(result){
// //   alert("questionAdded")
// //   setQuestion("")
// //   setAnswer("")
// //   setOptions([])
// //  }

// // }
// //   return (
// // <>
// //     <div className='bg-light d-flex flex-column w-100 py-3 mt-4 '>
// //     <form onSubmit={api} className='bg-white p-3 m-auto w-75 '>
// //       <h2>Add Questions</h2>
// //       <br />
// //       <label htmlFor="question" className='form-label'>Enter question</label>
// // <input type="text" name="question" value={question} onChange={(e)=>setQuestion(e.target.value)} className='form-control' placeholder='Question?'/>
// // <br />
// // <label htmlFor='options' className='form-label'>Enter Options</label>
// // {/* <input type="text" name="options" value={options} onChange={(e)=>setOptions(e.target.value)} className='form-control' placeholder='option1,option2,option3,option4'/>
// // <br /> */}

// // <div className='d-flex justify-content-between flex-wrap'>
// // {inputs.map((input, index) => (
// //         <div key={index} >
// //           <label>{`Option ${index + 1}:`}</label>
// //           <input
// //           className='form-control'
// //             type="text"
// //             value={input}
// //             onChange={(event) => handleInputChange(index, event)}
            
// //           />
// //         </div>
// //       ))}
// //       </div>
// //       <br />
// // <label htmlFor='answer' className='form-label'>Answer</label>
// // <input type="text" name="answer" value={answer} onChange={(e)=>setAnswer(e.target.value)} className='form-control' placeholder='answer'/>
// // <br />
// // <label htmlFor="topic">Select Topic</label>
// // <select name="topic" onChange={(e)=>setTopic(e.target.value)} className='form-control'>
// // <ViewTopic/>

// // </select>
// // <br />
// // <br />
// // <button className='btn btn-primary' type='submit'>Submit</button>

// //     </form>
// //     <p className='text-danger text-center'>if topic for the quiz is not exist then click on add topic</p>
// // <button className='btn btn-warning m-auto'  onClick={()=>set(true)}>Add Topic</button>
   

// //     </div>
          
// //           <div>
            
// //           </div>
// //           </>   
// //   )
// // }

// // export default AddQuestion

// import React, { useMemo, useState } from 'react'
// import { Outlet } from 'react-router-dom'
// import ViewTopic from './ViewTopic'

// function AddQuestion({ set }) {
//   let [data, setData] = useState(false)
//   let [question, setQuestion] = useState("")
//   let [options, setOptions] = useState([])
//   let [answer, setAnswer] = useState("")  // This will store the answer option index
//   let [topic, setTopic] = useState("")
//   const [inputs, setInputs] = useState(['', '', '', ''])

//   const handleInputChange = (index, event) => {
//     const newInputs = [...inputs];
//     newInputs[index] = event.target.value;
//     setInputs(newInputs);
//   }

//   // Handle answer checkbox change
//   const handleAnswerChange = (index) => {
//     setAnswer(index);  // Set the index of the correct answer
//   }

//   useMemo(() => {
//     handleInputChange
//   }, [topic]);

//   let api = async (e) => {
//     e.preventDefault()

//     let result = await fetch("http://localhost:8080/question", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//         authorization: JSON.parse(localStorage.getItem('token'))
//       },
//       body: JSON.stringify({ question, inputs, answer, topic })
//     })
//     result = await result.json()
//     if (result) {
//       alert("questionAdded")
//       setQuestion("")
//       setAnswer("")
//       setOptions([])
//     }
//   }

//   return (
//     <>
//       <div className='bg-light d-flex flex-column w-100 py-3 mt-4 '>
//         <form onSubmit={api} className='bg-white p-3 m-auto w-75 '>
//           <h2>Add Questions</h2>
//           <br />
//           <label htmlFor="question" className='form-label'>Enter question</label>
//           <input type="text" name="question" value={question} onChange={(e) => setQuestion(e.target.value)} className='form-control' placeholder='Question?' />
//           <br />
//           <label htmlFor='options' className='form-label'>Enter Options</label>
//           <div className='d-flex justify-content-between flex-wrap'>
//             {inputs.map((input, index) => (
//               <div key={index}>
//                 <label>{`Option ${index + 1}:`}</label>
//                 <input
//                   className='form-control'
//                   type="text"
//                   value={input}
//                   onChange={(event) => handleInputChange(index, event)}
//                 />
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id={`option-${index}`}
//                     checked={answer === index}
//                     onChange={() => handleAnswerChange(index)}
//                   />
//                   <label className="form-check-label" htmlFor={`option-${index}`}>
//                     Correct Answer
//                   </label>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <br />
//           <label htmlFor='answer' className='form-label'>Answer</label>
//           {/* This field is not necessary anymore because the answer is set by checkbox */}
//           <input type="text" name="answer" value={answer} readOnly className='form-control' placeholder='answer' />
//           <br />
//           <label htmlFor="topic">Select Topic</label>
//           <select name="topic" onChange={(e) => setTopic(e.target.value)} className='form-control'>
//             <ViewTopic />
//           </select>
//           <br />
//           <br />
//           <button className='btn btn-primary' type='submit'>Submit</button>
//         </form>
//         <p className='text-danger text-center'>if topic for the quiz is not exist then click on add topic</p>
//         <button className='btn btn-warning m-auto' onClick={() => set(true)}>Add Topic</button>
//       </div>
//     </>
//   )
// }

// export default AddQuestion
import React, { useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ViewTopic from './ViewTopic'
import Icons from './icontray/Icons'
import { Col,Button,Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'

function AddQuestion({ set }) {
  let [icon,setIcon]=useState({icon:"fa-image",family:"fa-solid"})
  let [data, setData] = useState(false)
  let[tray,setTray]=useState(false)
  let [question, setQuestion] = useState("")
  let [options, setOptions] = useState([])
  let [answer, setAnswer] = useState("")  // This will store the answer value
  let [topic, setTopic] = useState("")
  const [inputs, setInputs] = useState(['', '', '', ''])

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  }

  // Handle answer checkbox change, store the actual option value
  const handleAnswerChange = (optionValue) => {
    setAnswer(optionValue);  // Set the value of the selected correct answer
  }

  useMemo(() => {
    handleInputChange
  }, [topic]);

  let api = async (e) => {
    e.preventDefault()

    let result = await fetch("http://localhost:8080/question", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        authorization: JSON.parse(localStorage.getItem('token'))
      },
      body: JSON.stringify({ question, inputs, answer, topic,icon })
    })
    result = await result.json()
    console.log(result)
    if (result.errors) {
      alert("not")
      
      setQuestion("")
      setAnswer("")
      setOptions([])
    }
    else{
      alert("questionAdded")
    }
  }
const getIcon=()=>{
 setTray(true)
 if(tray){
  setTray(false)
 }
}

const setIcons=(a)=>{
console.log(a)
setIcon(a)
setTray(false)
}
  return (
    <>
      <div className='bg-light d-flex flex-column w-100 py-3 mt-4 '>
        <form onSubmit={api} className='bg-white p-3 m-auto w-75 '>
          <h2>Add Questions</h2>
          <br />
          <label htmlFor="question" className='form-label'>Quiz Name</label>
           <Row className='position-relative'>
          <Col className='d-flex' lg={12} sm={12}>
          <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)} className='form-control'  onFocus={()=>setTray(false) }
         style={{textTransform:"capitalize"}} />
          <Button variant='info' className='text-white' onClick={getIcon}>
            {!icon?
                       <i className={`${icon.icon} ${icon.family}`}></i>

            :
            <i className={`${icon.icon} ${icon.family}`}></i>
            }
  
          </Button>
            </Col>
            <Col lg={3} className='position-absolute end-0 justify-content-end mt-5  text-white' >
          
            {tray?
            <Icons iconFun={setIcons}/>
              :""
              } 

            </Col>
            </Row>
            {/* <FontAwesomeIcon icon={addIcon}/> */}
          {/* <br />
          <label htmlFor="question" className='form-label'>Upload Quiz Image</label>
          <input type="file" accept="image/*" value={topic} onChange={(e)=>setTopic(e.target.value)} className='form-control' />
          <br /> */}
                        <p>
                    

  

</p>
          <label htmlFor="question" className='form-label'>Enter question</label>
          <input type="text" name="question" value={question} onChange={(e) => setQuestion(e.target.value)} className='form-control' placeholder='Question?' />
          <br />
          <label htmlFor='options' className='form-label'>Enter Options</label>
          <div className='d-flex justify-content-between flex-wrap'>
            {inputs.map((input, index) => (
              <div key={index}>
                <label>{`Option ${index + 1}:`}</label>
                <input
                  className='form-control'
                  type="text"
                  value={input}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`option-${index}`}
                    checked={answer === input}  // Check if the current option matches the answer
                    onChange={() => handleAnswerChange(input)}  // Set the value of the option as the answer
                  />
                  <label className="form-check-label" htmlFor={`option-${index}`}>
                    Correct Answer
                  </label>
                </div>
              </div>
            ))}
          </div>
          <br />
          <label htmlFor='answer' className='form-label'>Answer</label>
          <input type="text" name="answer" value={answer} readOnly className='form-control' placeholder='answer' />
          <br />
      
          <br />
          <br />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>

      </div>
    </>
  )
}

export default AddQuestion
