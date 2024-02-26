import React, { useState, useRef, useEffect } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoPauseSharp } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import '../App.css';



function DisplayVideos({url}) {
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);



    function videoPlayPause() {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setPaused(false);
        } else {
            video.pause();
            setPaused(true);
        }
    }

    function updateProgressBar() {
        const video = videoRef.current;
        const currentTime = video.currentTime;
        const duration = video.duration;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    }

    useEffect(() => {
        const video = videoRef.current;

        function updateProgress() {
            updateProgressBar();
            if (!video.paused && video.currentTime < video.duration) {
                requestAnimationFrame(updateProgress);
            }
        }

        updateProgress();
    }, [paused]);

    useEffect(()=>{
        setPaused(false)
    },[url])

    
    function toogleMute() {
        videoRef.current.muted = !muted
        setMuted(!muted)
    }
    console.log(paused);
    
    return (
         <div className={`w-[350px] h-[580px] rounded-lg overflow-hidden relative`}>
            <video
                ref={videoRef}
                onClick={videoPlayPause}
                onTimeUpdate={updateProgressBar}
                src= {url}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                autoPlay
                loop
                muted
            ></video>

            {paused ? (
                <IoMdPlay className="absolute text-white text-2xl top-5 left-5" />
            ) : (
                <IoPauseSharp className="absolute text-white text-2xl top-5 left-5" />
            )}

            <button onClick={toogleMute}>
                {muted ? (<IoVolumeMute className={`absolute top-5 right-5 text-white text-2xl`}/>
                ) : (<HiMiniSpeakerWave className={`absolute top-5 right-5 text-white text-2xl`}/>
                )}
            </button>

            {/* progressbar */}
            <div className="w-full h-1 absolute bottom-0 left-0">
                {/* progressbar inner */}
                <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-red-600"
                ></div>
            </div>
        </div>
    );
}

export default DisplayVideos;
