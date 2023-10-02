import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from "swiper/modules"
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import 'swiper/css'
import profilePic1 from "../../img/woman1.png";
import profilePic2 from "../../img/man1.png";
import quotationMark from "../../img/quotation-mark.svg";

const Testimonial = () => {
    const clients =[
        {
            img: profilePic1,
            review:
            <span>I had the pleasure of working with Ching on a software engineering project during our university coursework. Ching is extremely professional and consistently demonstrated a high level of expertise in software engineering design, development, testing and implementation. Her efficiency and attention to detail were remarkable, ensuring that every aspect of our project was executed as planned.
            <br /><br />
            Ching is not only highly skilled but also an outstanding team player. While we worked in a cross-cultural and cross-functional team, Ching fostered a collaborative and positive work environment and played a major role in facilitating communication between the team members, often playing the role of a translator. She was always willing to support the team and her reliability in meeting deadlines and commitments was truly commendable, making her an invaluable asset to our project team.
            <br /><br />
            I have no doubt that Ching will excel in her future endeavors. Her technical expertise, attention to detail, and outstanding teamwork skills make her an exceptional professional and a pleasure to work with.</span>,
            name: "Crystal Fay D'Souza"
        },
        {
            img: profilePic2,
            review: <span>I'm Dylan, and I'm very happy to write this testmonial for my talented classmate Ching, who was a member of my group studying FIT5122 and FIT5120 at Monash. During the units, she consistently demonstrated excellent skills and a strong work ethic, especially in the back-end development area.
            <br /><br />
            Ching not only takes on a large part of the back-end development work, but also often assists other team members in development work. She is always available to provide guidance, answer questions and solve problems. Her collaborative and supportive nature greatly contributed to the success of our project and our team's overall learning experience.
            <br /><br />
            I wholeheartedly recommend Ching for a computer-related professional job as she possesses the qualities and skills that make her an outstanding colleague and team member.</span>,
            name: "Ruochen Wang"
        },
    ]
  return (
    <div className="t-wrapper" id="Testimonial">
        <div className="t-heading">
            <span>Peers always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper modules={[Pagination, Navigation]}
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation>
            {clients.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <div className="t-content">
                                <img src={quotationMark} alt="" />
                                {client.review}
                                <img src={quotationMark} alt="" />
                            </div>
                            <p className="client-name">{client.name}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial