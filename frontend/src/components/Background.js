import React, { useEffect, useState } from 'react';
import logo from '../assets/madrid_logo.png';
import '../stylesheets/background.css';

const Background = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [typedWord, setTypedWord] = useState('');
    const [index, setIndex] = useState(0);

    /**
     * useEffect used to render the logo on the middle of the screen.
     */
    useEffect(()=>{
        const image = new Image();
        image.src = logo;
        image.onload = () => {
            setIsLoaded(true);
        };

    }, [])
    /**
     * renders the text next to the logo
     */
    useEffect(() => {
        console.log("I print once")
        const text = 'Hala Madrid y nada mas!';
        const timer = setInterval(() => {
            setTypedWord(prevTypedWord => prevTypedWord + text.charAt(index));
            setIndex(prevIndex => prevIndex + 1);
            if (index >= text.length) {
                clearInterval(timer);
            }
        }, 100); // Adjust the typing speed as needed
        return () => clearInterval(timer);
    }, );

    return (
        <div className="background-container">
            <div className={`image-container ${isLoaded ? 'loaded' : ''}`}>
                <img alt="Logo" src={logo} />
            </div>
            <div className="typewriter">
                <h1>{typedWord}</h1>
            </div>
        </div>
    );
};

export default Background;







