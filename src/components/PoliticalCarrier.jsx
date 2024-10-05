import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Images } from './../image/index';
import "./political.css";

const PoliticalCarrier = () => {
  const imgStyle = {
    width: '600px',
    height: '400px', 
    objectFit: 'cover', 
    borderRadius:"1rem"
  };

  return (
    <div className="photo  container mt-4">
      {/* Photo Gallery Section */}
      <div className="row">
        <div className="col-3"></div>
        <div className="col-md-6">
          <div className="text-center my-4">
            <h3 className="other">Photo Gallery</h3>
            <div>
              <img className='ps' src={Images.Image7} alt="Gallery"  />
            </div>
          </div>

          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block mx-auto"
                src={Images.Image8}
                alt="First slide"
                style={imgStyle}
              />
              <Carousel.Caption>
                <h3>परमहंस स्वामीआगमानंद जी महाराज</h3>
                <p>dated: from 26/07/2024 to 28/07/2024</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <img
                className="d-block mx-auto"
                src={Images.Image9}
                alt="Second slide"
                style={imgStyle}
              />
              <Carousel.Caption>
                <h3> श्री तारकिशोर प्रसाद पूर्व उपमुख्यमंत्री बिहार </h3>
                <p>dated: from 26/07/2024 to 28/07/2024</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <img
                className="d-block mx-auto"
                src={Images.Image10}
                alt="Third slide"
                style={imgStyle}
              />
              <Carousel.Caption>
                <h3>विजय कुमार सिन्हा उप मुख्यमंत्री, बिहार</h3>
                <p>dated: from 26/07/2024 to 28/07/2024</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <img
                className="d-block mx-auto"
                src={Images.Image11}
                alt="Fourth slide"
                style={{ width: '600px',  objectFit: 'cover' , borderRadius:"15px" }}
              />
              <Carousel.Caption>
                <h3>सैयद शाहनवाज हुसैन राष्ट्रीय प्रवक्ता भारतीय जनता पार्टी</h3>
                <p>dated: from 26/07/2024 to 28/07/2024</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <img
                className="d-block mx-auto"
                src={Images.Image24}
                alt="Fifth slide"
                style={imgStyle}
              />
              <Carousel.Caption>
                <h3> सम्राट चौधरी </h3>
                <p>dated: from 26/07/2024 to 28/07/2024</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default PoliticalCarrier;
