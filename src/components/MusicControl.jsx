import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import weddingData from '../data/weddingData';
import './MusicControl.css';

const MusicControl = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("Audio playback issue:", err);
          });
      }
    }
  };

  // Trigger audio playback when user unlocks invitation
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay audio waiting for user gesture:", err);
        });
    }
  }, [autoPlayTrigger]);

  return (
    <div className="music-control-floating">
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src={weddingData.music.file}
      />

      <button 
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        aria-label="Toggle Wedding Music"
        title={isPlaying ? "Mute Music" : "Play Wedding Music"}
      >
        <Music size={16} className={`music-note-icon ${isPlaying ? 'pulse' : ''}`} />
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default MusicControl;
