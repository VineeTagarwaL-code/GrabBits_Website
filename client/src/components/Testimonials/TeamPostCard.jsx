import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import classes from './Card.module.css';
import cardData from "./CardData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Testimonials = () => {
  return (
    <div className={classes.testimon}>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          // disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={classes.testimonSubsection}>
              <div className={classes.testisub}>
                <div>
                  <img src={card.img} alt={card.name} className={classes.testiImg} />
                </div>
                <div className={classes.testimain}>
                  <h1 className={classes.testih1}>{card.name}</h1>
                  <p className={classes.testimain}>{card.role}</p>
                </div>
              </div>
              <div className={classes.testimsub2}>
                <p className="text-slate-500">{card.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={classes.leftArrow}> <ArrowBackIcon/></div>
        <div className={classes.rightArrow}> <ArrowForwardIcon/></div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
