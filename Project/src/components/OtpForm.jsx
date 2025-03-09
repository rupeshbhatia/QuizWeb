import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const OtpForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [actualOtp, setActualOtp] = useState(null);

  // Handle email submission to send OTP
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

  // Handle OTP verification
  const handleVerifyOtp = async () => {
    if (enteredOtp == actualOtp) {
      setMessage('OTP Verified!');
      
    } else {
      setMessage('Invalid OTP');
    }
  };

  return (
    <>
      
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
          />
          <Button onClick={handleVerifyOtp} variant='secondary'>Verify OTP</Button>
        </div>
      

    
    </>
  );
};

export default OtpForm;
