import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Row,Col,Card,Button} from 'react-bootstrap'
import { data, Link } from 'react-router-dom'

function StudentTopic({onDataChange,tlen}) {
  const[data,setData]=useState([])

  const [childData, setChildData] = useState(tlen);

    let apidata=async()=>{
        let result=await fetch("http://localhost:8080/findTopic")
        result=await result.json();
        setData(result)
       

    }
    const sendDataToParent = () => {
      onDataChange(childData); // Call the callback function provided by parent
  
    };
  
    useEffect(()=>{
apidata()

    },[])
useEffect(()=>{
  if(data.length>0){
    // tlen(data.length)

  }
},)

  return (
    <Row>
       
      
{
    data.map((item)=>{
        return(
    <Col lg={4} sm={6} className='mt-2 p-3' key={item._id}>
      <Link to={`/user/${item.name}`} className='text-decoration-none text-capitalize text-center'>
  <Card style={{width:"100%", backgroundColor:"azure",textDecoration:"none"  }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <br />
        <Button variant='success'>
         
          <FontAwesomeIcon icon={faCirclePlay }/> Play</Button>
      </Card.Body>
    </Card>
     </Link>
    </Col>
        )
    })


}

    </Row>
  )
}

export default StudentTopic