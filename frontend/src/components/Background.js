import React, { useState, useEffect } from 'react';
import logo from '../assets/madrid_logo.png';
import './background.css';



const Background = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = logo;
        image.onload = () => {
            setIsLoaded(true);
        };
    }, []);

    return (
        <div className={`image-container ${isLoaded ? 'loaded' : ''}`}>
            <img alt="Logo" src={logo} />
        </div>
    );
};

export default Background;
