import React from 'react';
import btn from "assets/img/btn.svg"
import btnR from "assets/img/btn-r.svg"
import Slider from "react-slick";
import Feature from "../../components/Features/Feature";
import {useAppSelector} from "../../hooks";

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return(
    <div
      className={`${className} btn`}
      onClick={onClick}
    />
  )
}

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return(
    <div
      className={`${className} btn`}
      onClick={onClick}
    />
  )
}

const AppSlider = () => {
  const items = useAppSelector(state => state.discount.items)

  const settings = {
    dots: false,
    infinite: items.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <section className="discount-slider">
      {/*<div className="slider-wrap">*/}
      {/*  <button className="slider-btn">*/}
      {/*    <img src={btn} alt=""/>*/}
      {/*  </button>*/}

      {/*  <div className="s-item"><img src="" alt=""/></div>*/}
      {/*  <div className="s-item"><img src="" alt=""/></div>*/}
      {/*  <div className="s-item"><img src="" alt=""/></div>*/}
      {/*  <div className="s-item last"><img src="" alt=""/></div>*/}

      {/*  <button className="slider-btn">*/}
      {/*    <img src={btnR} alt=""/>*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div className="main-discount-slider">
        <Slider {...settings}>
          {
            items.map((item, index) => (
              <div className="s-item" key={index}><img src={item.image} alt=""/></div>
            ))
          }
        </Slider>
      </div>
    </section>
  );
};

export default AppSlider;
