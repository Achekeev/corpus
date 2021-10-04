import React from 'react';
import btn from "assets/img/btn.svg"
import btnR from "assets/img/btn-r.svg"

const AppSlider = () => {
    return (
        <section className="slider">
            <div className="slider-wrap">
                <button className="slider-btn">
                    <img src={btn} alt="" />
                </button>

                <div className="s-item"><img src="" alt="" /></div>
                <div className="s-item"><img src="" alt="" /></div>
                <div className="s-item"><img src="" alt="" /></div>
                <div className="s-item last"><img src="" alt="" /></div>

                <button className="slider-btn">
                    <img src={btnR} alt="" />
                </button>
            </div>
        </section>
);
};

export default AppSlider;