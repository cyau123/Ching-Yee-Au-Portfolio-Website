import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/asian-girl2.svg';
import Gradcap from '../../img/gradcap.png';
import Laptop from '../../img/laptop.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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
            <Link spy={true} to='Contact' smooth={true}>
                <button className='button i-button'>Hire me</button>
            </Link>
            <div className="i-icons">
                <a href='https://www.linkedin.com/in/ching-au-melb/' target='_blank' rel='noopener noreferrer'>
                    <img src={LinkedIn} alt="" />
                </a>
                <a href='https://github.com/cyau123' target='_blank' rel='noopener noreferrer'>
                    <img src={Github} alt="" />
                </a>
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={girl} alt="" />
            <motion.img initial={{left: '-36%'}}
                        whileInView={{left: '-24%'}}
                        transition={transition}
                        src={glassesimoji} alt="" />
            <motion.div className='floating-div'
                        initial={{top: '-4%', left: '74%'}}
                        whileInView={{left: '68%'}}
                        transition={transition}
                        >
                <FloatingDiv image={Laptop} txt1="Software" txt2="Engineer"/>
            </motion.div>
            <motion.div className='floating-div'
                        initial={{top: '18rem', left: '9rem'}}
                        whileInView={{left: '0rem'}}
                        transition={transition}
                        >
                <FloatingDiv image={Gradcap} txt1="IT" txt2="Graduate" />
            </motion.div>

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