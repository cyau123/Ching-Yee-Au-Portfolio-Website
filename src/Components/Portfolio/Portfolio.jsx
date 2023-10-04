import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from "swiper/modules"
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css'
import { useContext, useState, useEffect } from 'react';
import { themeContext } from '../../Context';
import ReactPlayer from 'react-player';



const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [isMobileView, setIsMobileView] = useState(false);

    // Update isMobileView
     const checkScreenWidth = () => {
        setIsMobileView(window.innerWidth <= 480);
    };

    useEffect(() => {
        // Add an event listener to track screen width changes
        window.addEventListener('resize', checkScreenWidth);

        // Initial check for screen width
        checkScreenWidth();

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const equityDemoVidUrl = "https://www.youtube.com/watch?v=9z0g6oKUqyk";
    const equityProdVidUrl = "https://www.youtube.com/watch?v=y4wPB2EsYxo";

  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style = {{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper modules={[Pagination, Navigation]} spaceBetween={30} slidesPerView={isMobileView ? 1 : 3} pagination={{clickable: true}} grabCursor={true} className='portfolio-slider' navigation>
            <SwiperSlide>
                <div className='player-wrapper'>
                    <ReactPlayer className="react-player" url={equityDemoVidUrl} playing={false} 
                    volume={0.5} width='100%' height='100%' controls allowFullScreen/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='player-wrapper'>
                    <ReactPlayer className="react-player" url={equityProdVidUrl} playing={false} 
                    volume={0.5} width='100%' height='100%' controls allowFullScreen/>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio