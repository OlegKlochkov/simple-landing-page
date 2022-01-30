import './VideoPlayer.css';
import React, { useState } from 'react';

function VideoPlayer(props) {
    
    const [videoPlaying, setVideoPlaying] = useState(false);
    function playOrPauseVideo(actionName){
        const video = document.getElementById('videoPlayer');
        setVideoPlaying(!videoPlaying);
        if(actionName){
            video.play();
        }else{
            video.pause();
        }
    }
    
    return (
        <div className="VideoPlayer">
            <video id='videoPlayer' src={props.src} poster={props.poster}></video>
            <img id='playButton' 
                className={!videoPlaying ? 'PlayButton' : 'PauseButton'}
                src={!videoPlaying ? props.play : props.pause}
                onClick={() => {playOrPauseVideo(!videoPlaying)}}
                alt="playButton" />
        </div>
    );
}

export default VideoPlayer;