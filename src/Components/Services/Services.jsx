import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Ching-Yee-Au-CV.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {

    const transition = {duration: 1, type: 'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">

        {/* left side */}
        <div className="awesome">
            <span style = {{color: darkMode? 'white': ''}}>My Exceptional</span>
            <span>Skills</span>
            <span>I thrive on solving problems and possess a knack for logical thinking.
                <br/>
                My adaptability shines through my swift learning.
                <br/>
                To explore how I can add value to your organization,
                <br/>
                please click the button below to download my CV.
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
                        heading={'Web Development'}
                        detail ={"I have proficiency in a variety of programming languages including HTML, CSS, JavaScript, and Java. I am also experienced with popular frameworks such as React.js and ASP.NET MVC."}
                />
            </motion.div>

            {/* Second card */}
            <motion.div initial={{top: '12rem', left: '-15rem'}}
                    whileInView={{left: '-4rem'}}
                    transition={transition}
                    style={{top: '12rem', left: "-4rem"}}>
                <Card emoji = {Glasses}
                        heading={'Database'}
                        detail ={"I am skilled in managing diverse databases, with expertise in both relational databases like SQL and NoSQL databases such as MongoDB, Cassandra, and Neo4j."}
                />
            </motion.div>

            {/* Third card */}
            <motion.div initial={{top: '19rem', left: '23rem'}}
                    whileInView={{left: '12rem'}}
                    transition={transition}
                    style={{top: '19rem', left: "12rem"}}>
                <Card emoji = {Humble}
                        heading={'UI/UX'}
                        detail ={"I am proficient in design tools like Figma for creating wireframes, prototypes, and user interfaces. "}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services