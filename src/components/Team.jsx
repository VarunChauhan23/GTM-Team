import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import Cardimg from '../assets/cardimg.jpg';
import Cardimg2 from '../assets/cardimg2.jpg';
import Cardimg3 from '../assets/cardimg3.jpg';
import arrow from '../assets/leftarrow.svg';
import arrowred from '../assets/leftarrowred.svg';

import './Team.css';

const Team = () => {
  const [cardData, setCardData] = useState();
  const [startIndex, setStartIndex] = useState(0);
  const [lefthover, setLeftHover] = useState(false)
  const [righthover, setRightHover] = useState(false)


  const [cardRemCount, setCardRemCount] = useState(4)

  useEffect(() => {
    const width = window.innerWidth;

    console.log('bg', width)
    if (width > 670) {
      setCardRemCount(4)
    } else if (width > 504) {
      setCardRemCount(3)
    } else if (width > 340) {
      setCardRemCount(2)
    } else {
      setCardRemCount(1)
    }


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
      {
        usrImg: Cardimg2,
        usrName: 'Ram Mohite ',
        usrDes: 'Manager',
      },
      {
        usrImg: Cardimg2,
        usrName: 'Ram Mohite ',
        usrDes: 'Manager',
      },
      {
        usrImg: Cardimg2,
        usrName: 'Ram Mohite ',
        usrDes: 'Manager',
      },
      {
        usrImg: Cardimg2,
        usrName: 'alskdfj Mohite ',
        usrDes: 'Manager',
      }
    ];

    setCardData(data);
  }, []);

  const handleNextClick = () => {
    const nextIndex = startIndex + 1;
    console.log('next:', nextIndex, cardData.length - cardRemCount)
    if (nextIndex <= cardData.length - cardRemCount) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = startIndex - 1;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  return (
    <>
      <div className='header-container'>
        <div className='custom-shape' />
        <div style={{ textAlign: 'center' }}>
          <svg width="37" height="clamp(10px, 3vw, 20px)" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.00875854 9.27783L18.5563 16.421L21.3133 13.6895L36.503 19.5339L22.6831 5.36778L19.0071 9.00981L9.18122 0.172762L-0.00875854 9.27783Z" fill="#F8F8F8" />
          </svg>
          <span className="custom-text">Meet </span>
          <span className="custom-text1">Our Team</span>
          <svg width="37" height="clamp(10px, 3vw, 20px)" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.839 9.31226L18.1952 16.4857L15.4887 13.8042L0.234638 19.6733L14.2581 5.59086L17.8668 9.16623L27.8172 0.373828L36.839 9.31226Z" fill="#F8F8F8" />
          </svg>
        </div>
      </div>
      <div className="custom-container">
        <div className="custom-box" />

        <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '700px' }}>

          <div className="custom-text2" >
            <span className="custom-text3">Leadership</span>
            <span className="custom-text4"> In our Expert’s Hands!</span>
          </div>
          <div style={{ position: 'relative', width: "100%" }}>

            <div className="custom-container11">

              {cardData && cardData.slice(startIndex, startIndex + cardRemCount).map((item, index) => (
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

            </div>
            <img className="arrow left-arrow" onMouseEnter={() => setLeftHover(true)} onMouseLeave={() => setLeftHover(false)} onClick={handlePrevClick} src={lefthover ? arrowred : arrow}></img>
            <img className="arrow right-arrow" onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)} onClick={handleNextClick} src={righthover ? arrowred : arrow}></img>
          </div>

        </div>
      </div>

    </>
  );
};

export default Team;
