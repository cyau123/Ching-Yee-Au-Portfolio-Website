import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';
import { useEffect, useRef } from "react";

function Navbar() {
    const headerRef = useRef(null);
  useEffect(() => {
    let preScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement){
        return;
      }

      //scrolling up -> nav bar should slide down
      if (preScrollPos > currentScrollPos){
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      preScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className="n-wrapper" ref={headerRef}>
        <div className="n-left">
            <div className="n-name">Ching Yee</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true}>
                        <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className="button n-button">
                Contact
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar