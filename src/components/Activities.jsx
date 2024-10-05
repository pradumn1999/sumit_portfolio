import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Images } from './../image/index';
import "./activities.css";

function Services() {
  return (
    <div className='my'>
      {/* Our Activities Section */}
      <h2 className="text-center">My Social Work</h2>
      {/* Image below "Our Activities" heading */}
      <div className="text-center">
        <img 
          src={Images.Image7} 
          alt="Activities Banner" 
          className="img-fluid" 
        />
      </div>

      <div className="row w-100 justify-content-center rims">
        <div className="col-md-3 text-center">
          <div className="icon-box">
            <img 
              src={Images.Image20} 
              alt="Birth Certificate" 
              style={{ 
                height: '200px', 
                width: '200px', 
                borderRadius: '50%', 
                objectFit: 'cover' 
              }} 
              className="img-fluid" 
            />
            <p className='janm'>क्लीन  नौगछिया ग्रीन नौगछिया के द्वारा
              <p>  रक्तदान शिविर में भाग लिया</p>
            </p>
          </div>
        </div>

        <div className="col-md-3 text-center">
          <div className="icon-box">
          <img 
              src={Images.Image4} 
              alt="Birth Certificate" 
              style={{ 
                height: '200px', 
                width: '200px', 
                borderRadius: '50%', 
                objectFit: 'cover' 
              }} 
              className="img-fluid" 
            />
            <p className='janm'> क्लीन  नौगछिया ग्रीन नौगछिया के द्वारा
              <p>रक्तदान शिविर में प्रमाण पत्र देते हुए</p>
            </p>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="icon-box">
          <img 
              src={Images.Image21} 
              alt="Birth Certificate" 
              style={{ 
                height: '200px', 
                width: '200px', 
                borderRadius: '50%', 
                objectFit: 'cover' 
              }} 
              className="img-fluid" 
            />
            <p className='janm'> केन्द्रीय रेलवे रेल यात्री संघ के द्वारा
             
              <p>व्हीलचेयर बांटते  हुए</p>
            </p>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="icon-box">
          <img 
              src={Images.Image6} 
              alt="Birth Certificate" 
              style={{ 
                height: '200px', 
                width: '200px', 
                borderRadius: '50%', 
                objectFit: 'cover' 
              }} 
              className="img-fluid" 
            />
            <p className='janm'>क्लीन  नौगछिया ग्रीन नौगछिया के द्वारा<p>जरुरतमंद को भोजन बांटते  हुए</p>
            </p>
          </div>
        </div>
      </div>

      {/* Our Medical Services Section */}
      <Container className="">
        <h2 className="text-center">My Politics Carrier</h2>
        {/* Image below "Our Medical Services" heading */}
        <div className="text-center">
          <img 
            src={Images.Image7} 
            alt="Medical Services Banner" 
            className="img-fluid" 
            style={{ }} // Set your desired dimensions here
          />
        </div>

        <Row>
          <Col md={4}>
            <Card className="service-card mb-3">
              <Card.Body className="text-center">
                <Card.Img
                  // variant="top"
                  src={Images.Image22}
                  // className="service-img"
                  style={{height:"240px"}}
                />
                <Card.Title className='vgyan'> विज्ञान एवं प्रौद्योगिकी मंत्री बिहार </Card.Title>
                <Card.Text className='singh'>आदरणीय सुमित कुमार सिंह जी के साथ</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card mb-3">
              <Card.Body className="text-center">
                <Card.Img
                  // variant="top"
                  src={Images.Image23}
                  // className="service-img"
                  style={{height:"240px"}}
                />
                <Card.Title  className='vgyan'>बिहार सरकार के उपमुख्यमंत्री</Card.Title>
                <Card.Text className='singh'>आदरणीय विजय कुमार सिन्हा जी के साथ</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card mb-3">
              <Card.Body className="text-center">
                <Card.Img
                  // variant="top"
                  src={Images.Image24}
                  // className="service-img"
                  style={{height:"240px"}}
                />
                <Card.Title  className='vgyan'>बिहार सरकार के उपमुख्यमंत्री</Card.Title>
                <Card.Text className='singh'>आदरणीय सम्राट चौधरी जी के साथ </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Services;
