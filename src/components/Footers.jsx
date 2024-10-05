import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footers.css'; // Custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt, faExclamationCircle, faAmbulance, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Images } from './../image/index';

function App() {
  return (
    <>
      <div className="footer bg-red text-white py-4">
        <div className="container">
          <div className="row">


            <div className='col-md-2'></div>

            {/* Navigation */}
            <div className="col-md-3">
              <h2 className=''>Navigation</h2>
              <div className='opds2'></div>
              <ul className="list-unstyled">
                <li className="hover-text"><span className="black-dot"></span> Copyright Policies</li>
                <li className="hover-text"><span className="black-dot"></span> Terms & Conditions</li>
                <li className="hover-text"><span className="black-dot"></span> Disclaimer</li>
                <li className="hover-text"><span className="black-dot"></span> Hyperlink Policy</li>
                <li className="hover-text"><span className="black-dot"></span> Privacy Policy</li>
                <li className="hover-text"><span className="black-dot"></span> Old Website</li>
              </ul>
            </div>

            <div  className="col-md-3" ></div>

            {/* Contact */}
            <div className="col-md-3 contact-section">
              <h2 className=''>Contact</h2>
              <div className='opds3'></div>
              <p><FontAwesomeIcon icon={faPhone} /> Phone:+91 87898 32218</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Bhagatpatti Naugachia <br />Bhagalpur, Bihar - 853204, Bihar, India<br /></p>         
              <p><FontAwesomeIcon icon={faPhone}/> Emergency: +91 87898 32218</p>
              <p>
        <FontAwesomeIcon icon={faEnvelope} /> Email:Sumitbhagat 9939@gmail.com </p>

        
            </div>
          </div>
        </div>

       

      <div className='row w-100'>
        <div className='col-1'></div>
        <div className='col-2'><img src={Images.Image40}/></div>
        <div className='col-5'></div>
        <div className='col-2 '>
          <h4 className="connect">Connect with Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/sumit.bhagat.1654700" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='face' icon={faFacebookF} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon  className='face' icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/sumitbhagat9939/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='face' icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='face' icon={faLinkedinIn} size="2x" />
          </a>
        </div>
        </div>

        <div className='col-1'></div>

      </div>

      <div>
        <hr></hr>

<div className='d-flex flex-row justify-content-center footer-rights'>

<div className='mt-1'>© All Rights Reserved. |Designed & Develop By Pradumn Mandal (Developer Contact :- 6299502265)</div>

</div>

      </div>

      </div>

    
     
    </>
  );
}

export default App;
