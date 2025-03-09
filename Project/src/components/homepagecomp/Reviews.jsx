import React, { useState, useEffect } from 'react';
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; // For the star icon
// import './App.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/rateview')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error("Error fetching reviews:", error));
  }, []);

  // Render the star rating component
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? '#FFD700' : '#e4e5e9'}
          size={20}
        />
      );
    }
    return stars;
  };

  return (
    <div className="App mt-5">
      <Container >
        <h1 className="text-center my-4">Customer Reviews</h1>

 
        {reviews.length > 0 ? (
          <Carousel interval={3000} >
            {reviews.map((review, index) => {
              if (index % 3 === 0) { // Show 3 reviews per slide
                return (
                  <Carousel.Item key={index} className='text-decoration-none h-100'>
                    <Row className="d-flex justify-content-center text-decoration-none" >
                      {reviews.slice(index, index + 3).map((rev) => (
                        <Col key={rev.id} md={4} >
                          <Card className="text-center p-3"style={{minHeight:"40vh"}}>
                            <Card.Body>
                            <img src="./vite.svg" alt="" style={{height:"20px"}} />
                              
                              <Card.Title>{rev.name}</Card.Title>
                              <p>Verified User</p>
                              <div>{renderStars(rev.rating)}</div>
                              <Card.Text>{rev.review}</Card.Text>

                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                );
              }
              return null;
            })}
          </Carousel>
        ) : (
          <p>Loading reviews...</p>
        )}
      </Container>
    </div>
  );
}

export default Reviews;
