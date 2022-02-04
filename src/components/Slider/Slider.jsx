import './Slider.css';
import React, { useState } from 'react';

function Slider(props) {
    
    const images = props.images;
    const [currentImage, setCurrentImage] = useState(images[0]);
    
    return (
        <div className="Slider">
            <img src={currentImage} alt="" id="currentPhoto" />
            <div className="SliderButtons">
                <img 
                className={currentImage === images[0] ? 'Disabled' : 'Usable'}
                onClick={() => currentImage === images[0] ? null : setCurrentImage(images[images.indexOf(currentImage)-1])} 
                src={currentImage === images[0] ? props.DisabledPrevious: props.Previous} alt="previous" />
                <img 
                className={currentImage === images[images.length-1] ? 'Disabled' : 'Usable'} 
                onClick={() => currentImage === images[images.length-1] ? null : setCurrentImage(images[images.indexOf(currentImage)+1])} 
                src={currentImage === images[images.length-1] ? props.DisabledNext : props.Next} alt="next" />
            </div>
        </div>
    );
}

export default Slider;