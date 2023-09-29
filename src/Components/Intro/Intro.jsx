import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

const Intro = () => {
    const transition = {duration: 2, type: 'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style = {{color: darkMode? 'white': ''}}>Hi! I am</span>
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
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img initial={{left: '-36%'}}
                        whileInView={{left: '-24%'}}
                        transition={transition}
                        src={glassesimoji} alt="" />
            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
            </div>

            {/* blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>

            <div className="blur" style={{background: "#C1F5FF",
                                            top: "17rem",
                                            width: "21rem",
                                            height: "11rem",
                                            left: "-9rem"}}></div>
        </div>
    </div>
  )
}

export default Intro