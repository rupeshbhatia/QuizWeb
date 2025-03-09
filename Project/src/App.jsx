import React, { useEffect, useState } from 'react'
import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import Questions from './components/Questions'
import TNavbar from './components/Navbar'
import Homepage from './components/Homepage'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import ContactUs from './components/ContactUs'
import AdminDash from './components/AdminDash'
import CreateQuiz from './components/CreateQuiz'
import ViewTopic from './components/ViewTopic'
import AddQuestion from './components/AddQuestion'
import StudentDash from './components/StudentDash'
import PrivateComponent from './components/PrivateComponent'
import FinalScore from './components/FinalScore'
import Footer from './components/footer'
import AboutUs from './components/AboutUs'
import StudentTopic from './components/StudentTopic'
import Adminhome from './components/Adminhome'
import { Row } from 'react-bootstrap'
import {UserInfo} from './components/UserInfo'
import ViewQuiz from './components/ViewQuiz'
import EditQuestions from './components/EditQuestions'
// import AddQuestion from './components/AddQuestion'
// import Quiz from './components/Quiz'
// import Home from './components/Home'
function App() {
  const [dataFromChild, setDataFromChild] = useState(0);
  const [cont, setCont] = useState(0);

  const handleChildData = (data) => {

    setDataFromChild(data);

  };
  // console.log(dataFromChild)

  
  return (
  <>
 <header style={{height:"max-content",width:"100%",zIndex:5,backgroundColor:"rgb(255, 255, 255)",position:"sticky",top:0,color:"black",transition:"all 5s ease"}}>
  <TNavbar/>
  </header>


  <Routes>

    <Route path='/' element={<Homepage/>}/>

    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/signup' element={<Home/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/about' element={<AboutUs/>}/>

       <Route element={<PrivateComponent/>}>
    <Route path='/user' element={<StudentDash/>}>
    <Route path='/user/:topic' element={<Questions/>}>
    <Route path='score' element={<FinalScore/>}/>
    
    </Route>
    </Route>

    <Route path='/question' element={<Questions/>}/>
    <Route path='/admin' element={<AdminDash onDataChange={handleChildData} />}>
    <Route path='/admin/dash' element={<Adminhome/>}/>
    <Route path='/admin/editQuestion/:topic' element={<EditQuestions/>}/>
    <Route path='/admin/viewQuiz' element={<ViewQuiz/>}/>
    <Route path='/admin/createQuiz' element={<CreateQuiz/>}>
    <Route path='addQuestion' element={<AddQuestion/>}/>
     </Route>
    {/* <Route path='prev' element={<StudentTopic />}/> */}
    <Route path='student' element={<UserInfo/>}/>
    <Route path='score' element={<h1>Coming Soon....</h1>}/>

    </Route>
    </Route>
  </Routes>


   <Footer/>



  
  

  </>
   
  )
}

export default App