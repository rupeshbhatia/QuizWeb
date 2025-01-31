// import React, { useEffect, useState } from 'react'
// import Options from './Options';

// function Quiz() {
// let [api,setApi]=useState([]);
// let [questionNum,setQuestionnum]=useState([])
// let [count,setCount]=useState(1)
// let [score,setScore]=useState(0)
// let [response,setResponse]=useState(false)
// let itemsPage=1
// const apiData=async()=>{
// let result=await fetch("http://localhost:8080/readQuestion")
// result=await result.json()
// setApi(result)

// setQuestionnum(result.slice(0,itemsPage))
// }
// const handlePage=(newPage)=>{
// const startidx=(newPage-1)*itemsPage;
// const endidx=startidx+itemsPage;
// setQuestionnum(api.slice(startidx,endidx))
// setCount(newPage)
// }
// if(response==true){
//   handlePage(count+1)
//   setResponse(false)
// }

// useEffect(()=>{
// apiData()
// },[])

// let checkAnswer=(userRes,ans)=>{
// if(userRes==ans){
//   setScore(score+1)
//   setResponse(true)
// }
// else{
//   setResponse(true)
//   setScore(score)
// }
// }
//   return (
//    <div className='container bg-info d-flex flex-column align-items-center w-50 color-white py-3'>
//   <h1>Quiz questions</h1>
//   <h2>Score {score}</h2>
//   {questionNum.map((item,idx)=>{
//         return(
//            <> <p>{idx+1} . {item.question}</p>
//            <Options option={item.options} check={checkAnswer} answer={item.answer}/>
//             </>
//         )
//     })
//   }

//   <div className="btn">
//     <button onClick={()=>handlePage(count+1) } disabled={count*itemsPage>=api.length} className='btn btn-success'>Next</button>
    
//     <button onClick={()=>handlePage(count-1) } disabled={count*itemsPage==1 }className='btn btn-success'> Prev</button> 
//   </div>
//    </div>
//   )
// }

// export default Quiz