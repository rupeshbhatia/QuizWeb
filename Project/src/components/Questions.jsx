import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import FinalScore from './FinalScore';

function Questions({setFind}) {
let navigate=useNavigate()
  
    let[data,setData]=useState([]);
    let[number,setNumber]=useState(0);
    let[bg,setBg]=useState("")
  let[finish,setFinish]=useState(false)
    let [score,setScore]=useState(0)

    let {topic}=useParams()
    
    let[answered,setAnwered]=useState(false)
 
    let fetchData=async()=>{

        let result=await fetch(`http://localhost:8080/readQuestion/${topic}`)
        result=await result.json()
        console.log(result)
        setData(result)
        
    }
let handleQuestion=()=>{
    if(number<data.length-1){
setNumber(number+1)
setAnwered(false)
setBg("")
    }
    else{
        setFinish(true)
        navigate("score")
        
    }
}
let handleAns=(ans)=>{

    if(ans==data[number].answer){
       setScore(score+1)
    }
    if (answered) return; 
    let updatedBg = [...bg]; // Create a copy of the current background state

    // Iterate over options and set the color based on correctness
    updatedBg[data[number].inputs.indexOf(ans)] = ans === data[number].answer ? 'green': 'red'; 
    setBg(updatedBg); 
    setAnwered(true)
}
    useEffect(()=>{
        if(topic){
fetchData()}
    },[topic])
  return (
    <div className='container 
     d-flex flex-column text-capitalize' style={{width:"40vw",height:"100vh"}}>

              {finish?<FinalScore score={score} />
:
            data.length>0?(
<>
<p>Questions{number+1} /{data.length}</p>
<h1>{data[number].question}</h1>
<ul className='list-group ' >
    {data[number].inputs.map((item,idx)=><li key={idx} className='list-group-item' style={{backgroundColor:bg[idx],cursor:answered?"not-allowed":"pointer",opacity: answered ? 0.5 : 1}} onClick={()=>handleAns(item)} >{item}</li>) }
</ul>
<button onClick={handleQuestion} className='btn btn-primary'>Next</button>
</>
            )

        :(<>
          <p>Question not Found...</p>  
          <button onClick={()=>navigate('/user')} className='btn btn-success'>Back</button>
          </>
        )}
    </div>

  )
}

export default Questions