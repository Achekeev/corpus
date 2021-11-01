import React from 'react';

const Feature = ({image, description}: {image?: string, description: string}) => {
    return (
        <li className="slide-item">
            <a href="/">
                <img src={image} alt=""/>
                <span className="caption">{description}</span>
            </a>
        </li>
    );
};

export default Feature;