import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

function Availablequiz() {
  const navigate = useNavigate();

  const [qcount, setQcount] = useState([]);

  const questionCount = async () => {
    let result = await fetch("http://localhost:8080/alQuestion");
    result = await result.json();
    setQcount(result);
    console.log(result);
  };

  useEffect(() => {
    questionCount();
  }, []);

  const handleCardClick = (item) => {

    navigate(`/admin/editQuestion/${item._id}`)

  };

  return (
    <>
      <Container className="d-flex align-items-evenly flex-wrap justify-content-center gap-2  ms-0 ps-0" >
        {qcount.map((item, idx) => (
          <Card
            key={idx}
            className="border border-success"
            style={{
            
              width: '14rem',
              height: '18rem',
              padding: '.4rem',
              cursor: 'pointer', // Make the card clickable
            }}
            onClick={() => handleCardClick(item)} // Use arrow function for parameter passing
          >
            <Card.Body className="d-flex flex-column justify-content-evenly border border-light p-1">
              <div
                className="card-icon bg-success d-flex flex-column justify-content-center text-white text-center position-relative"
                style={{ height: '9rem' }}
              >
                {item.icon != null ? (
                  <i className={`${item.icon.family} ${item.icon.icon} fs-2`}></i>
                ) : (
                  <i className="fa-solid fa-globe fs-1"></i>
                )}

                <div className="position-absolute top-0 end-0 me-2">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <Card.Title className="mt-1 text-capitalize">{item._id}</Card.Title>
              <Card.Text>{item.count} Question(s)</Card.Text>
              <div className="flex-row justify-content-evenly">
                <i className="fa-solid fa-bullseye text-success"></i> 
                &nbsp;
                 Success rate: 80%
                 &nbsp;

                <i
                  className="fa-solid fa-play bg-success rounded p-2 rounded-circle text-white text-center"
                  style={{ height: '30px', width: '30px' }}
                ></i>
              </div>
            </Card.Body>
          </Card>
        ))}

        <Card className="border border-success " style={{ width: '14rem', height: '18rem', padding: '.4rem', cursor: "pointer" }} onClick={() => navigate("/admin/createQuiz")}>
          <Card.Body className="flex-column d-flex justify-content-evenly text-center " style={{ color: 'lightgrey' }}>
            <i className="fa-solid fa-plus" style={{ fontSize: '8rem' }}></i>
            <p>Add a new Quiz</p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Availablequiz;
