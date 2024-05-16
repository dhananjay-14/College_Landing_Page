import React from 'react';
import "./Videoplayer.css"
import vdo from "../../assets/Campus tour 3-IIIT Kottayam.mp4"

function VideoPlayer({ playState, setPlayState }) {

    return (
        <div className={`videoplayer ${playState ? '' : 'hide'}`}>
            <video src={vdo} autoPlay muted controls></video>
            {playState && <button style={{ background: "black", color: "white", cursor: "pointer" }} onClick={() => { setPlayState(false) }}>Close</button>}
        </div >
    );
}

export default VideoPlayer;
