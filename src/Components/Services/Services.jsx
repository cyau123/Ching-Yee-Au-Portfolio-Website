import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">

        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
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
            <div style={{left: '14rem'}}>
                <Card emoji = {HeartEmoji}
                        heading={'Design'}
                        detail ={"Figma Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>

            {/* Second card */}
            <div style={{top: '12rem', left: "-4rem"}}>
                <Card emoji = {Glasses}
                        heading={'Developer'}
                        detail ={"HTML, CSS, JavaScript, React"}
                />
            </div>

            {/* Third card */}
            <div style={{top: '19rem', left: "12rem"}}>
                <Card emoji = {Humble}
                        heading={'UI/UX'}
                        detail ={"Lorem ispum is simpley dummy text of printing pf printing Lorem"}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services