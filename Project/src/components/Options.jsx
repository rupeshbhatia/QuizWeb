import React, { useState } from 'react'

function Options({option,check,answer}) {
    console.log(option)
  return (
    <div style={{marginLeft:"20px",textTransform:"capitalize"}}>
        <ol type='a' >
            {
                option.map((item,idx)=>{
                    return(
                        <li onClick={(e)=>{check(item,answer)}} key={idx} style={{cursor:"pointer",color:"white",padding:"0rem .5rem"}}>{item}</li>
                    )
                    
                })
            }
        </ol>
    </div>
  )
}

export default Options