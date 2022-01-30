import './Main.css';
import Arrow from './assets/arrowUpRight.svg';
import HappyPerson from './assets/happyPerson.png';
import Pause from './assets/pause.svg';
import Play from './assets/play.svg';
import Vector from './assets/vector.svg';
import Circles from './assets/circles.svg';
import Triangles from './assets/triangles.svg';
import Plus from './assets/plus.svg';
import VideoPlaceholder from './assets/videoPlaceholder.png';
import Video from './assets/videoPlaceholder.mp4'

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import React, { useState } from 'react';

function Main() {
    return (
        <div className="Main">
                <div className="Intro">
                    <div className="IntroText">
                        <h1>
                            Build Your <br />
                            Awesome <br />
                            Platform
                        </h1>
                        <h3>
                            Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
                        </h3>
                        <button className="VioletButton">
                            Our Services
                            <img src={Arrow} alt="arrow" />
                        </button>

                        <div id='gradientIntroText'></div>
                    </div>
                    <div className="IntroImage">
                        <img id='happyPerson' src={HappyPerson} alt="happyPerson" />
                        
                        <img src={Vector} alt="" id="vectorIntro" />
                        <img src={Circles} alt="" id="circlesIntro" />
                        <img src={Triangles} alt="" id="trianglesIntro" />
                        <img src={Plus} alt="" id="plusIntro" />

                        <div id='gradientIntroImage'></div>
                    </div>
                </div>
                <div className="VideoPart">
                    <div className="VideoText">
                        <h1>
                            Why Enver Is The <br />
                            Best Choice?
                        </h1>
                        <h3>
                            Watch this one minute video so you understand why you should use our services!
                        </h3>
                    </div>
                    <div className="Video">
                        <VideoPlayer src={Video} poster={VideoPlaceholder} play={Play} pause={Pause} />
                    </div>
                </div>
            <div className="Services"></div>
            <div className="Portfolio"></div>
            <div className="ContactUs"></div>
        </div>
    );
}

export default Main;