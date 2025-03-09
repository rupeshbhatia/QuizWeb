import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Form, Formik, Field } from 'formik'
import RedErrorMsg from './RedErrorMsg'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
// import './Home.css'
// import quiz from '../images/quiz.jpg'
import { useNavigate } from 'react-router-dom'
import OtpForm from './Otpform'
import axios from 'axios'
import SucessFull from './SucessFull'
import SignIn from './SignIn'
function Home() {
  let navigate = useNavigate()

  const [email, setEmail] = useState("");

  let validations = yup.object({
    name: yup.string().required(),
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/, "enter strong password"),
    cnfpassword: yup.string().required("confirm password is required").oneOf([yup.ref('password')], "both password must match"),
    role: yup.string().required()
  })
  let register = async (val) => {

    let { name, password, role } = val

    let result = await fetch('http://localhost:8080/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"

      },
      body: JSON.stringify({ name, email, password, role })
    })
    result = await result.json()
    console.log(result)
    if (result.msg) {
      alert(result.msg)
      navigate("/signin")
    }
    // else if(result.result.role==1){
    //         setTimeout(()=>{
    //           alert("sign up succesfully as admin")
    //       localStorage.setItem("user",JSON.stringify(result.result))
    //       localStorage.setItem("token",JSON.stringify(result.token))
    // navigate("/admin/dash")
    //         },1000) 
    //       }
    else {

      setSuccessAlert(true)

      setTimeout(() => {

        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.token))
        navigate("/user")
      }, 4000)

    }

  }
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [actualOtp, setActualOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [sucessAlert, setSuccessAlert] = useState(false)
  const [message, setMessage] = useState('');

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/send-otp', { email });
      setActualOtp(response.data.otp); // Store the actual OTP from backend
      setIsOtpSent(true);
      setMessage('OTP sent to your email!');
    } catch (error) {
      setMessage('Error sending OTP');
    }
  };
  const handleVerifyOtp = async () => {
    if (enteredOtp == actualOtp) {
      setMessage('OTP Verified!');
      setVerified(true);
      setIsOtpSent(false)
      setTimer(60)
    } else {
      setMessage('Invalid OTP');
    }
  };
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval;

    if (isOtpSent && timer > 0) {


      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    // Cleanup the interval when the component is unmounted or timer reaches 0
    return () => clearInterval(interval);


  }, [isOtpSent, timer]);

const[dnone,setDnone]=useState(false)
let dno=()=>{
  setDnone(false)
}
  return (
    <Container fluid style={{ height: "100vh", width: "100%"}} >
      <Row className='justify-content-center align-items-center d-flex ' style={{minHeight:"90vh"}}>
      {sucessAlert ?
            <SucessFull /> : ""
          }
          {!dnone?
        <Col className='bg-light rounded d-flex flex-wrap gap-4  justify-content-center' lg={5} md={6}>
         
          <Formik
            validationSchema={validations}
            initialValues={{ name: "", password: "", cnfpassword: "", role: "2" }}
            onSubmit={(values, action) => {

              register(values)
              action.resetForm()
            }}
          >
            <Form className='bg-light p-5 w-100'>
              <h2 className='fw-bold'>Sign Up </h2>
              <p>Create your Free Account in Simple Steps</p>
              <br />
              <Field type="text" placeholder="Enter your Name" name="name" className='form-control' />

              <RedErrorMsg name='name' />
              <br />
              <div className="d-flex justify-content-center gap-1">
                {!isOtpSent || timer == 0 ? <><Field type="email" placeholder="Enter your Email" name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <br />
                  <Button onClick={handleSendOtp}>Send</Button></>
                  :
                  <div className='d-flex justify-content-center  gap-1 w-100'>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                      className='form-control ' />
                    <Button onClick={handleVerifyOtp} variant='secondary' className=''>Verify</Button>



                  </div>
                }
              </div>
              <RedErrorMsg name="email" />

              <p className='text-danger'>{message}</p>
              {
                timer > 58 || timer == 0 ?
                  " " : <p className='text-primary'>You can resend otp in {timer}s</p>
              }
              <br />
              <div className="div"  style={!verified ? { pointerEvents: "none" } : { pointerEvents: "all" }}>
                <Field type="Password"  placeholder="Create Password" name="password" className='form-control' />

                <RedErrorMsg name='password' />
                <br />

                <Field type="Password" placeholder="Confirm  Password" name="cnfpassword" className='form-control' />
                <br />
                <RedErrorMsg name='cnfpassword' />
                <div className='d-flex gap-2'>
                  {/* <Field type="radio"  name="role" value='1' />Admin */}
                  {/* <Field type="radio"  name="role" value='2' />Student */}
                  <Field type="hidden" name="role" value='2' />
                </div>

                <RedErrorMsg name='role' />
                <br />
              </div>
              <Button className='btn btn-primary' type='submit' >Sign Up</Button>
             <span> Already Have Account? </span>  <span className='text-success'style={{cursor:"pointer"}} onClick={()=>setDnone(true)}>Login</span>
                <br />


            </Form>
          </Formik>
        
        </Col>:
        <SignIn dsno={dno}/>
}
      </Row>
    </Container>

  )
}

export default Home
