import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import './Team.css';

const Team = () => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    const data = [
      {
        usrImg: 'lasdfjk',
        usrName: 'Bhagwat Mohite',
        usrDes: 'Manager',
      },
      {
        usrImg: 'lasdfjk',
        usrName: 'Bhagwat Mohite',
        usrDes: 'Manager',
      },
      {
        usrImg: 'lasdfjk',
        usrName: 'Bhagwat Mohite',
        usrDes: 'Manager',
      },
      {
        usrImg: 'lasdfjk',
        usrName: 'Bhagwat Mohite',
        usrDes: 'Manager',
      }
    ]

    setCardData(data);

  }, [])
  return (
    <>
      {/* <div className='main-div'>
        <h1 className='header'><span style={{ color: 'yellow' }}>Leadership</span> in your experts Hands!</h1>
        <div className='main-div1'>sdkjnskjf

        </div>
      </div> */}
      <div className='header-container'>
        <div className='custom-shape' />
        <div style={{ textAlign: 'center' }}><span style={{ color: '#FFBE3D', fontSize: 48.85, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Meet </span><span style={{ color: 'white', fontSize: 48.85, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Our Team</span></div>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '474px', background: '#181818', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <div style={{ width: '50%', height: '50%', background: 'rgba(241, 62, 30, 0.46)', boxShadow: '184px 184px 184px ', borderRadius: 40, border: '1px black solid', filter: 'blur(184px)' }} />

        <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', }}>
          <div style={{ textAlign: 'center', marginBottom: '70px', marginTop: '10px' }}><span style={{ color: '#FFBE3D', fontSize: 50.80, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Leadership</span><span style={{ color: '#F6F6F6', fontSize: 50.80, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}> In our Expert’s Hands!</span></div>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', overflow: 'hidden', gap: '5px', padding: '5px' }}>
            {cardData && cardData.map((item, index) => {
              return <div className="profile-card" key={index}>
                <div className="profile-info">
                  <img className="profile-pic" src="https://via.placeholder.com/119x119" />
                  <div className="user-name">{item.usrName}</div>
                  <div className="user-description">{item.usrDes}</div>
                </div>
                <div className="social-icons">
                  <a href="#" className="linkedin-icon"><FontAwesomeIcon className='icon' icon={faLinkedin} color="#0077B5" /></a>
                  <a href="#" className="instagram-icon"><FontAwesomeIcon className='icon' icon={faInstagram} color="#E4405F" /></a>
                  <a href="#" className="facebook-icon"><FontAwesomeIcon className='icon' icon={faFacebook} color="#3b5998" /></a>
                </div>
              </div>

            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default Team;