import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

function Banner() {
  return (
    <Container fluid className='' >

    <Row style={{backgroundColor:"rgb(42,197,223)",clipPath: "polygon(0 6%, 100% 23%, 100% 97%, 0 85%)",maxHeight:"200vh",minHeight:"190vh",paddingBottom:"10rem",paddingTop:"1rem"}} className='align-items-center justify-content-center gap-3 text-center text-white fs-5 flex-wrap'>
      <br />
        <h1 className='text-white'>Build engaging quizzes with <br /> the best online quiz maker</h1>
        <Row className='justify-content-center gap-2'>
<Col  lg={2} sm={12} md={5} className='d-flex  align-items-center flex-column justify-content-center'>
<div className="bg d-flex align-items-center justify-content-center"style={{backgroundImage:"url(step-blue-1.webp)",backgroundRepeat:"no-repeat",backgroundPosition:"center", backgroundSize:"contain",height:"20vh",width:"100%"}}>
    <img src="edit.webp" alt="" style={{height:"7vh", width:"7vh" }}/>
   
</div>
<br />
<p className='fw-bold'>Create</p>
       
        <p>   Start with one of our online quiz templates or create your own quiz from scratch. No need for coding.
    </p>
 </Col>
 <Col  lg={2} sm={12} md={5} className='d-flex  align-items-center flex-column justify-content-center'>
<div className="bg d-flex align-items-center justify-content-center"style={{backgroundImage:"url(step-blue-2.webp)",backgroundRepeat:"no-repeat",backgroundPosition:"center", backgroundSize:"contain",height:"20vh",width:"100%"}}>
    <img src="plus-circle.webp" alt="" style={{height:"7vh", width:"7vh" }}/>
   
</div>
<br />
<p className='fw-bold'>Edit</p>
<p>
Add or remove questions with a few clicks. Customize the design of your quiz in detail with the advanced designer. 
    </p>
 </Col>
 <Col  lg={2} sm={12}  className='d-flex align-items-center flex-column justify-content-center'>
<div className="bg d-flex align-items-center justify-content-center"style={{backgroundImage:"url(step-blue-3.webp)",backgroundRepeat:"no-repeat", backgroundSize:"contain",backgroundPosition:"center",height:"20vh",width:"100%"}}>
    <img src="share-alt.webp" alt="" style={{height:"7vh", width:"7vh" }}/>
   
</div>
<br />
<p className='fw-bold'>Share</p>
<p>
Set privacy settings for your quiz, share it through different channels, let people answer, and monitor the results easily.
    </p>
 </Col>
 </Row>
    </Row>
    <h1 className='text-center'>See what you can achieve <br /> with quiz maker of <br /> Quiz Maker</h1>
   <br />
   <br />
    <Row className='mt-5 justify-content-center position-relative ' style={{textAlign:"justify"}}>
   <Col className='lh-lg' lg={5}>
   <Row>
   <h2>Educational quizzes</h2>
   <p>forms.app’s free online test maker enables you to create online quizzes for your students and give them online tests easily. Thanks to the Calculator tool of forms.app, you can instantly score every student automatically.

If you like, you can show their results to the students and even give them pre-prepared feedback about how they have done.

</p>
</Row>
   <Row >
   <h2>Lead generation quizzes</h2>
   <p >Marketers love interactive content and they tend to think this kind of content converts more. Well, it may be true, but it matters a lot how you do it. Creating online quizzes for your landing pages and capturing leads from them is easy with forms.app.

You can assign a different value for each answer to some qualifier questions in your lead generation form and create an automatic customer segmentation in your CRM according to the scores your leads get.</p>
   </Row>
   <Row>
    <h2>Just for fun quizzes</h2>
    <p>Enjoy creating fun quizzes whether to be answered by your co-workers or your friends. You can create different quizzes such as personality tests to evaluate personality types, test your friends with friendship quiz maker.</p>
   </Row>
   </Col>
   <Col lg={4}>
   <img src="quiz-bottom-img-min.webp" alt=""  style={{height:"50vh",position:"sticky",top:"20%"}} />
   </Col>
    </Row> </Container>
  )
}

export default Banner