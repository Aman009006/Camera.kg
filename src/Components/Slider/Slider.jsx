import React, { useState, useRef ,useEffect } from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import axios from "axios"

import "swiper/css";

function Slider() {
  const swiperRef = React.useRef(null);
  


  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://camera312292.herokuapp.com/slider/`)
      .then((res) => {
        setState(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="slider__content container">
      <div className="slider__controller">
        <p className="slider__title">Фото со съемок</p>
        <div className="buttons">
          <div
            id="previousButton"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          ><img src="/images/Prev.svg" alt="" /></div>
          <div
            id="nextButton"
            onClick={() => swiperRef.current.swiper.slideNext()}
         ><img src="/images/Next.svg" alt="" /></div> 
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        ref={swiperRef}
      >
       {state.map((images)=>{
         return(
          <SwiperSlide>
          {" "}
          <img
            src={images.image}
            className="slider__img"
          />
        </SwiperSlide>
         )
       })}
      
      </Swiper>
    </div>
  );
}
export default Slider;
