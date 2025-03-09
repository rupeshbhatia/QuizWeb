import React, { Children, useEffect, useState } from 'react'

function ViewTopic() {
  let [data,setData]=useState([])
  async function  api(){
    let result=await fetch("http://localhost:8080/findTopic");
    result=await result.json()
    setData(result)
  
    
  }
 useEffect(()=>{
     api();
 },[api])


  return (
    <>
      

        {
            data.map((item)=>{
                return(
<option value={item.name} key={item._id}>{item.name}</option>
                )
            })
        }
    </>
  )
}

export default ViewTopic
