import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width: '100%'}} />
      <div className="f-content">
        <span>chingyee.au.234@gmail.com</span>
        <div className="f-icons">
          <a href='https://www.linkedin.com/in/ching-au-melb/' target='_blank' rel='noopener noreferrer'>
            <LinkedIn color='white' size='3rem'/>
          </a>
          <a href='https://github.com/cyau123' target='_blank' rel='noopener noreferrer'>
            <Github color='white' size='3rem'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer