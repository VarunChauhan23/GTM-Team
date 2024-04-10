import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import Cardimg from '../assets/cardimg.jpg';
import Cardimg2 from '../assets/cardimg2.jpg';
import Cardimg3 from '../assets/cardimg3.jpg';
import './Team.css';

const Team = () => {
  const [cardData, setCardData] = useState();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const data = [
      {
        usrImg: Cardimg,
        usrName: 'Bhagwat Mohite',
        usrDes: 'Director',
      },
      {
        usrImg: Cardimg3,
        usrName: 'Ashish Gaikwad',
        usrDes: 'Manager',
      },
      {
        usrImg: Cardimg3,
        usrName: 'Shubham Mise',
        usrDes: 'CTO',
      },
      {
        usrImg: Cardimg3,
        usrName: 'Sai Mise',
        usrDes: 'Web Designer',
      },
      {
        usrImg: Cardimg3,
        usrName: 'Raju Mohite',
        usrDes: 'Cashier',
      },
      {
        usrImg: Cardimg3,
        usrName: 'vishnu Mohite',
        usrDes: 'Director',
      },
      {
        usrImg: Cardimg3,
        usrName: 'Siddesh Mohite',
        usrDes: 'Employee',
      },
      {
        usrImg: Cardimg2,
        usrName: 'Ram Mohite ',
        usrDes: 'Manager',
      },

    ];

    setCardData(data);
  }, []);

  const handleNextClick = () => {
    const nextIndex = startIndex + 4;
    if (nextIndex < cardData.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = startIndex - 4;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  return (
    <>
      <div className='header-container'>
        <div className='custom-shape' />
        <div style={{ textAlign: 'center' }}>
          <span className="custom-text">Meet </span>
          <span className="custom-text1">Our Team</span>
        </div>
      </div>
      <div className="custom-container">
        <div className="custom-box" />

        <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '700px' }}>

          <div className="custom-text2" >
            <span className="custom-text3">Leadership</span>
            <span className="custom-text4"> In our Expert’s Hands!</span>
          </div>

          <div className="custom-container11">
            <div className="arrow left-arrow" onClick={handlePrevClick}>&lt;</div>

            {cardData && cardData.slice(startIndex, startIndex + 4).map((item, index) => (
              <div className="profile-card" key={index}>
                <div className="profile-info">
                  {/* <img className="profile-pic" src="https://via.placeholder.com/119x119" alt="Profile" /> */}
                  <img className="profile-pic" src={item.usrImg} alt="Profile" />
                  <div className="user-name">{item.usrName}</div>
                  <div className="user-description">{item.usrDes}</div>
                </div>
                <div className="social-icons">
                  <a href="#" className="linkedin-icon"><FontAwesomeIcon className='icon' icon={faLinkedin} color="#0077B5" /></a>
                  <a href="#" className="instagram-icon"><FontAwesomeIcon className='icon' icon={faInstagram} color="#E4405F" /></a>
                  <a href="#" className="facebook-icon"><FontAwesomeIcon className='icon' icon={faFacebook} color="#3b5998" /></a>
                </div>
              </div>
            ))}

            <div className="arrow right-arrow" onClick={handleNextClick}>&gt;</div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Team;
