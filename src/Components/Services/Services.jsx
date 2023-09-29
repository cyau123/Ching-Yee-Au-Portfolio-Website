import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {

    const transition = {duration: 1, type: 'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services">

        {/* left side */}
        <div className="awesome">
            <span style = {{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <span>Lorem ispum is simpley dummy text of printing pf printing Lorem
                <br/>
                ispum is  simpley dummy text of printing
            </span>

            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            {/* First card */}
            <motion.div initial={{left: '25rem'}}
                    whileInView={{left: '14rem'}}
                    transition={transition}
                    style={{left: '14rem'}}>
                <Card emoji = {HeartEmoji}
                        heading={'Design'}
                        detail ={"Figma Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>

            {/* Second card */}
            <motion.div initial={{top: '12rem', left: '-15rem'}}
                    whileInView={{left: '-4rem'}}
                    transition={transition}
                    style={{top: '12rem', left: "-4rem"}}>
                <Card emoji = {Glasses}
                        heading={'Developer'}
                        detail ={"HTML, CSS, JavaScript, React"}
                />
            </motion.div>

            {/* Third card */}
            <motion.div initial={{top: '19rem', left: '23rem'}}
                    whileInView={{left: '12rem'}}
                    transition={transition}
                    style={{top: '19rem', left: "12rem"}}>
                <Card emoji = {Humble}
                        heading={'UI/UX'}
                        detail ={"Lorem ispum is simpley dummy text of printing pf printing Lorem"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services