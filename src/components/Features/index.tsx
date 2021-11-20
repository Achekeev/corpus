import React, {useEffect, useState} from 'react';
import burger from "assets/img/burger.svg"
import {useAppDispatch, useAppSelector} from "hooks";
import Feature from "components/Features/Feature";
import {fetchCategories} from "store/categories";
import RouteNames from "router/routeNames";

import Slider from 'react-slick';

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

const Features = () => {
  const {categories} = useAppSelector(state => state.categories);
  const dispatch = useAppDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div className="features">
      <div className="burger" onClick={() => setShowMenu(!showMenu)}>
        <img src={burger} alt=""/>
      </div>
      <div id="menu" className="menu" style={{display: showMenu ? "block" : "none"}}>
        <ul>
          <li><a href={RouteNames.CATEGORIES}>Категории</a></li>
          <hr/>
          {/*<li><a href="/">Каталог товаров</a></li>*/}
          {/*<hr/>*/}
          <li><a href={`${RouteNames.ROOT}#contacts`}>Контакты</a></li>
          <hr/>
          <li><a href={RouteNames.ABOUT}>О нас</a></li>
          <hr/>
        </ul>
      </div>

      <div className="slider-wrapper-custom">
        <Slider {...settings}>
          {
            categories.map((category, index) => (
              <Feature
                image={category.image}
                alt={index}
                description={category.name}
                key={index}
              />)
            )
          }
        </Slider>
      </div>

    </div>
  );
};

export default Features;
