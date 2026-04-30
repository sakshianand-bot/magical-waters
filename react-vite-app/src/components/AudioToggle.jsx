import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Playback failed:", error);
          setIsPlaying(false);
          alert("Audio playback failed. Please try again.");
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="flex items-center gap-3">
      <audio 
        ref={audioRef} 
        src="/water.mp3" 
        loop 
        preload="auto"
      />
      
      <div className="flex items-center gap-3 bg-[#3B82F6]/5 hover:bg-[#3B82F6]/10 transition-colors px-4 py-2 rounded-full border border-blue-100/30">
        <button
          onClick={toggleAudio}
          className="flex items-center gap-2 group outline-none"
          title={isPlaying ? "Pause Healing Sound" : "Enable Healing Sound"}
        >
          <div className="relative flex h-2.5 w-2.5">
            {isPlaying ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-400/50"></span>
            )}
          </div>
          <span className="text-[10px] font-bold text-blue-900/60 tracking-wider uppercase whitespace-nowrap">
            {isPlaying ? 'Sound On' : 'Healing Sound'}
          </span>
        </button>

        {isPlaying && (
          <div className="flex items-center gap-2 pl-2 border-l border-blue-200/50 animate-in fade-in slide-in-from-left-2 duration-300">
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume} 
              onChange={handleVolumeChange}
              className="w-16 sm:w-20 h-1 bg-blue-200/50 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-[10px] font-bold text-blue-900/40 w-4">
              {Math.round(volume * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioToggle;
