import React, { useState,useEffect, createContext, useContext } from 'react'
import { Button, Table } from 'react-bootstrap'



export function UserInfo({children}) {
      
    const[userinfo,setUserinfo]=useState([])
    const[ucount,setUcount]=useState(0)
    let userApi=async()=>{
        let result=await fetch("http://localhost:8080/userInfo")
         result=await result.json()
         console.log(result)
         setUserinfo(result)
         setUcount(result.length)
      }
      useEffect(()=>{
      userApi()
      },[])
      
  return (
   
    <Table className='mt-5 text-center'>
    <thead>
        <tr>
     <th>S.No.</th>
     <th>Name</th>
     <th>Email</th>
     <th>Update User</th>
     <th>Remove User</th>
     </tr>
    </thead>

    <tbody>

     {
        userinfo.map((item,idx)=>{
        return(
       <tr key={idx}>
       <td>{idx+1}.</td>
       <td>{item.name}</td>
       <td>{item.email}</td>
       <td><Button variant='warning' className='text-light'>Update</Button></td>
       <td><Button variant='danger'>Remove</Button></td>

       </tr>
            
        )
        })
     } 
    </tbody>

    </Table>

  )
}

export default UserInfo