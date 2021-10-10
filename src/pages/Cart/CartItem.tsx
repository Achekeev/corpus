import React from 'react';
import cartImage2 from "assets/img/cab-img-2.svg";

const CartItem = () => {
    return (
        <div className="cab-item">
            <div>
                <img src={cartImage2} alt=""/>
            </div>
            <div className="cab-info">
                <div className="info">
                    <div>
                        <p className="pro-name">
                            Диван маленький
                        </p>
                        <p className="prod-num">
                            #564644515648445
                        </p>
                    </div>
                    <div>
                        <p className="price">
                            230000
                        </p>
                    </div>
                </div>
                <div className="info">
                    <div className="prod-count">
                        <button className="counter-btn">
                            -
                        </button>

                        <em className="value">
                            0
                        </em>

                        <button className="counter-btn">
                            +
                        </button>
                    </div>
                    <div className="cab-values">
                        <button className="delete-btn">
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;