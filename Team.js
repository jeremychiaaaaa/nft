import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import ReactCardFlip from 'react-card-flip'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
function Team() {
  const[phone,setPhone] = useState(window.matchMedia("(max-width: 900px)").matches)
 useEffect(() => {
 window.matchMedia("(max-width: 900px)").addEventListener('change', e => setPhone(e.matches))


}, [])
  
 
  return(
  <section>
  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={phone ? 1 : 3}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    }}
   loop={true}
   pagination={phone ? true : false}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div className={phone ? 'profileCard-Phone': 'profileCard' }>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
     

      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      
      <div className='profileCard-icons'>
       
          <span className='team-icon-instagram '></span>
      
      
          <span className='team-icon-twitter '></span>
        
        
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
 
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
    
      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>

      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
    
      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
  
      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
   
      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
    
      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='profilePicture' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore. </p>
    
      <div className='profileCard-icons'>
        <div className='teamcard-svg'>
          <span className='team-icon-instagram '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-twitter '></span>
        </div>
        <div className='teamcard-svg'>
          <span className='team-icon-linkedin '></span>
        </div>
      </div>
      </div>
    </SwiperSlide>
  </Swiper>


</section>

 )
}

export default Team