import React from 'react';

const Feature = ({image, description, alt}: {image: string, description: string, alt: number}) => {
    return (
        <div className="slide-item">
            <a href="/">
                <img src={image} alt={`${alt}`} />
                <span className="caption">{description}</span>
            </a>
        </div>
    );
};

export default Feature;
