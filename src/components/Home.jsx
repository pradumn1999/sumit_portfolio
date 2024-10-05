import React from 'react';
import './home.css'; // Make sure to create a corresponding CSS file to style your components
import { Images } from './../image/index';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <div className="home-container">
       
<div className="content">
        <motion.div 
          className="intro-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
         
          <div className='d-flex flex-column bhagat'>
          <h1>नमस्ते!<br />सुमित भगत</h1>
          <p>समाज सेवक<br /></p>
          
          <div className="buttons">
            {/* <button>ABOUT</button>
            <button>MY WORKS</button> */}
            </div>
          </div>
        </motion.div>

        {/* Image should be placed here */}
        {/* <img src={Images.Image} alt="Profile" className="profile-image" /> */}
      </div>
    </div>
  );
}

export default Home;