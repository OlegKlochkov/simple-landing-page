import './VideoPlayer.css';
import React, { useRef, useState } from 'react';

function VideoPlayer(props) {
    
    const [videoPlaying, setVideoPlaying] = useState(false);
    const video = useRef(null);
    function playOrPauseVideo(actionName){
        setVideoPlaying(!videoPlaying);
        if(actionName){
            video.current.play();
        }else{
            video.current.pause();
        }
    }
    
    return (
        <div className="VideoPlayer">
            <video id='videoPlayer' src={props.src} poster={props.poster} ref={video}></video>
            <img id='playButton' 
                className={!videoPlaying ? 'PlayButton' : 'PauseButton'}
                src={!videoPlaying ? props.play : props.pause}
                onClick={() => {playOrPauseVideo(!videoPlaying)}}
                alt="playButton" />
        </div>
    );
}

export default VideoPlayer;