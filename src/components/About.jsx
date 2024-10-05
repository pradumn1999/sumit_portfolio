// src/components/About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Images } from './../image/index';
import './about.css';

const About = () => {
  return (
    <div className='aboutee'>
    <div className='divs'></div>

    <Container id="about" className="bg my-1">
      <Row>
        <Col md={4}>
          {/* Set the image to be circular */}
          <Image src={Images.Image} style={{height: "300px"}} roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h1 className='a-me'>About Me</h1>
          <p className='clr-white'>
          नमस्ते! मैं सुमित भगत मैं नौगछिया भागलपुर, बिहार से हूं। मैं एक सामाजिक कार्यकर्ता हूं और मैंने कई सामाजिक गतिविधियों पर काम किया है।          </p>
          <p className='clr-white'>
           मैंने अपनी राजनीति की शुरुआत अपने छात्र जीवन  अखिल भारतीय विद्यार्थी परिषद से शुरू की एवं की मैंने बहुत सारे सामाजिक कार्य किए
          </p>
          <p className='clr-white'>
          उन सभी सामाजिक कार्यों का विवरण नीचे  दिया गया है
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
