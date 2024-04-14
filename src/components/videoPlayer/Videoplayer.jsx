import React, { useRef } from 'react'
import "./videoplayer.css"
import video from "../../assets/Micah.mp4"

const Videoplayer = ({ playState, setPlayState }) => {
    const player = useRef(null);
    const closePlayer = (e) => {
        if (e.target === player.current) {
            console.log("clikced")
            setPlayState(false);
        }
    }

    return (
        <div className={playState ? 'videoplayer' : "videoplayer hide"} ref={player}
            onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>

        </div>
    )
}

export default Videoplayer
