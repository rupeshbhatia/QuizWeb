import React,{useState,useEffect} from 'react'
import { Button, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
function EditQuestions() {
    let {topic}=useParams()
   
 let [data,setData]=useState([])
    let fetchData=async()=>{

        let result=await fetch(`http://localhost:8080/readQuestion/${topic}`)
        result=await result.json()
        console.log(result)
        setData(result)
        
    }
   let {id}=useParams()

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <h1>Edit Questions</h1>
        <Table>
            <thead>
                <tr>
                    <th>Q.No.</th>
                    <th>Question</th>
                    <th>Options</th>
                    <th>Ans</th>
                    <th>Action</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((item,idx)=>{
                    return(
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{item.question}</td>
                        <td>{item.inputs}</td>
                        <td>{item.answer}</td>
                        <td>{}</td>
                        {/* <td><Button onClick={()=>}>Edit</Button></td> */}
                        <td><Button variant='danger'>Delete</Button></td>
                   </tr>
                    
                )})
            }
            </tbody>
        </Table>
    </div>
  )
}

export default EditQuestions