import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I am</span>
                <span>Ching Yee</span>
                <span>IT graduate with passion 
                    about coding and ready to contribute 
                    as a skilled software engineer</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <a href='https://github.com/cyau123'>
                    <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/ching-au-melb/'>
                    <img src={LinkedIn} alt="" />
                </a>
            </div>

        </div>
        <div className="i-right">
            i am right side
        </div>
    </div>
  )
}

export default Intro