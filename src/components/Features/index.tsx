import React from 'react';
import burger from "assets/img/burger.svg"
import chair from "assets/img/1armch.png"
import ArrowLeftDropCircleOutlineIcon from "mdi-react/ArrowLeftDropCircleOutlineIcon";
import ArrowRightDropCircleOutlineIcon from "mdi-react/ArrowRightDropCircleOutlineIcon";
const Features = () => {
    return (
        <div className="features">
            <div className="burger">
                <img src={burger} alt=""/>
            </div>
            <div id="menu" className="menu">
                <ul>
                    <li><a href="/">Категории</a></li>
                    <hr/>
                    <li><a href="/">Каталог товаров</a></li>
                    <hr/>
                    <li><a href="/">Контакты</a></li>
                    <hr/>
                    <li><a href="/">О нас</a></li>
                    <hr/>
                </ul>
            </div>

            <ul className="slide">
                <button className="btn" style={{color: "black"}}>
                    <ArrowLeftDropCircleOutlineIcon/>
                </button>

                <li className="slide-item">
                    <a href="/">
                        <img src={chair} alt=""/>
                        <span className="caption">Офисные стулья</span>
                    </a>
                </li>
                <li className="slide-item">
                    <a href="/">
                        <img src={chair} alt=""/>
                        <span className="caption">Офисные стулья</span>
                    </a>
                </li>
                <li className="slide-item">
                    <a href="/">
                        <img src={chair} alt=""/>
                        <span className="caption">Офисные стулья</span>
                    </a>
                </li>
                <li className="slide-item">
                    <a href="/">
                        <img src={chair} alt=""/>
                        <span className="caption">Офисные стулья</span>
                    </a>
                </li>
                <li className="slide-item">
                    <a href="/">
                        <img src={chair} alt=""/>
                        <span className="caption">Офисные стулья</span>
                    </a>
                </li>
                <li className="slide-item">
                    <a href="/">
                        <img src={chair} alt=""/>
                        <span className="caption">Офисные стулья</span>
                    </a>
                </li>
                <li className="slide-item">
                    <a href="/">
                        <img src={chair} alt=""/>
                        <span className="caption">Офисные стулья</span>
                    </a>
                </li>

                <button className="btn" style={{color: "black"}}>
                    <ArrowRightDropCircleOutlineIcon/>
                </button>
            </ul>
        </div>
    );
};

export default Features;