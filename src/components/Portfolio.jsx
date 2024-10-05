import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Images } from './../image/index';
import "./portfolio.css";

const Portfolio = () => {
  return (
    <Container id="portfolio" className="port my-5 p-3 clearfix"> 
      <h2 className="text-center">My Achievement</h2>
      <Row>
        <Col xs={12} sm={12} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={Images.Image25}
              className="portfolio-image" 
            />
            <Card.Body>
              <Card.Text className="achi">
                परमहंस स्वामी आगमानंद जी महाराज के द्वारा अंग वस्त्र से सम्मनित होते हुए
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={Images.Image17}
              // style={{height:"240px"}}
              className="portfolio-image" 
            />
            <Card.Body>
              <Card.Text className="achi">
                IG विकास वैभव सर को श्रीदुर्गाचरितमानस भेट करते हुए
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={Images.Image19}
              className="portfolio-image" 
            />
            <Card.Body>
              <Card.Text className="achi">
                केन्द्रीय रेलवे रेल यात्री संघ के द्वार मोमेंटो से सम्मनित होते हुए
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
