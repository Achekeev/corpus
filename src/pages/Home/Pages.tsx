import React from 'react';
import ArrowLeftDropCircleOutlineIcon from "mdi-react/ArrowLeftDropCircleOutlineIcon";
import ArrowRightDropCircleOutlineIcon from "mdi-react/ArrowRightDropCircleOutlineIcon";

const Pages = () => {
    return (
        <div className="pages">
            <button className="page-btn">
                <ArrowLeftDropCircleOutlineIcon/>
            </button>

            <a href="/">
                1
            </a>
            <a href="/">
                2
            </a>
            <a href="/">
                3
            </a>
            <a href="/">
                4
            </a>
            <a href="/">
                5
            </a>
            <a href="/">
                6
            </a>
            <a href="/">
                7
            </a>
            <a href="/">
                8
            </a>

            <button className="page-btn">
                <ArrowRightDropCircleOutlineIcon/>
            </button>
        </div>
    );
};

export default Pages;