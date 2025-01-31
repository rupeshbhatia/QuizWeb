import React, { useState,useEffect } from 'react'
import Admincard from './Admincard'
import { Row,Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus, faUser } from '@fortawesome/free-regular-svg-icons'
import { faPage4 } from '@fortawesome/free-brands-svg-icons'
import StudentTopic from './StudentTopic'
function Adminhome() {
  // let [topics,setTopics]=useState(0)
  let[userinfo,setUserinfo]=useState([])

   let[topiclen,setTopiclen]=useState(0)
     let tlen=(data)=>{
    setTopiclen(data)
     } 

 const[ucount,setUcount]=useState(0)
    let userApi=async()=>{
        let result=await fetch("http://localhost:8080/userInfo")
         result=await result.json()
         setUcount(result.length)
         
      }
 const[qcount,setQcount]=useState(0)
      let questionCount=async()=>{
        let result=await fetch("http://localhost:8080/allQuestion")
        result=await result.json()
         setQcount(result.length)
      }
      useEffect(()=>{
      userApi()
      questionCount()
      },[])

  return (
    <>
    <Row className='d-flex justify-content-evenly mt-3 align-items-center text-center'>
<Admincard logo={<FontAwesomeIcon icon={faUser}/>}  txt="Users"  length={ucount}  />
    <Admincard logo={<FontAwesomeIcon icon={faPage4}/>} txt="Questions" length={qcount} />
    <Admincard logo={<FontAwesomeIcon icon={faCalendarMinus}/>}  txt="Topics" length={topiclen} />
    </Row>
    <Row >
 <Container  className=' p-5' style={{userSelect:"none",pointerEvents:"none"}}>
  <h2>Last Played</h2>
      <StudentTopic tlen={tlen} />
      </Container>
    </Row>
    </>
  )
}

export default Adminhome