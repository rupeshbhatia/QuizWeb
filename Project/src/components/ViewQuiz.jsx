import React,{useState,useEffect} from 'react'
import { Table,Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function ViewQuiz() {
  const[qcount,setQcount]=useState([])
  // const[dtopic,setDtopic]=useState([])
        let questionCount=async()=>{
          let result=await fetch("http://localhost:8080/alQuestion")
          result=await result.json()
           setQcount(result)
        }
     
      let deleteTopic=async(data)=>{
       let cnf=confirm("are you sure")
       if(cnf){
  
        let result=await fetch(`http://localhost:8080/deleteTopic/${data}`,{
          method:"delete"
        })
       
          questionCount()
    
        }

      }
        useEffect(()=>{
      questionCount()
        },[])
  return (
    <div className='mt-3'>
      <h2>Here you can Edit Question and Delete Quiz.</h2>
      <br />
      <Table hover className='text-center'>
        <thead>
        <tr>
     <th>S.No.</th>
     <th>Topic</th>
     <th>Questions</th>
     <th>Edit</th>
     <th>Delete</th>
     </tr>
        </thead>
   <tbody>
    {qcount.length>0?qcount.map((item,idx)=>{
      return(
        <tr key={idx}>
          <td>{idx+1}.</td>
          <td>{item._id}</td>
          <td>{item.count}</td>
          <td><Button variant='warning ' onClick={()=>deleteTopic(item._id)}>EDIT</Button></td>
          <td><Button variant='danger' onClick={()=>deleteTopic(item._id)}>DELETE</Button></td>
        </tr>
      )
    })
      
   :
   <tr>
   <td>Quiz not found</td>
   </tr>
   }
   </tbody>

      
</Table>
    </div>
  )
}

export default ViewQuiz