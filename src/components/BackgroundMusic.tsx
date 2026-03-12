import React, {useState, useEffect, useRef} from "react";

const BackgroundMusic: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying,  setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.5;
            audio.play().catch((error) => {
                console.log("Автовоспроизведение заблокировано.");
            });
        }
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="music-container">
            <audio ref={audioRef} src="/audio/imitate.mp3" loop preload="auto"/>
            <button className="music-button" onClick={togglePlay}>
                {isPlaying ? "🔇 Отключить музыку" : "🔊 Включить музыку"}
            </button>
        </div>
    )
}

export default BackgroundMusic;