import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Timer, ArrowRight, Play } from 'lucide-react';
import weddingData from '../data/weddingData';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onOpen }) => {
  const { bride, groom } = weddingData.couple;
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleOpenClick = () => {
    if (isCountingDown) {
      // Direct skip if clicked again during countdown
      onOpen();
      return;
    }
    setIsCountingDown(true);
    setCountdown(3);
  };

  useEffect(() => {
    let timer;
    if (isCountingDown) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Trigger open invitation after 3 seconds countdown completes
            setTimeout(() => {
              onOpen();
            }, 300);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCountingDown, onOpen]);

  return (
    <motion.div 
      className="welcome-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } }}
    >
      {/* Muted background loop video / atmosphere */}
      <video 
        src="/assets/decorations/opening-video.mp4"
        className="welcome-bg-video"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Glass Backdrop Layer */}
      <div className="welcome-video-backdrop"></div>

      {/* Traditional Invitation Card Modal */}
      <motion.div 
        className="welcome-card welcome-card-emerged"
        initial={{ opacity: 0, scale: 0.7, y: 50, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="welcome-card-corner top-left"></div>
        <div className="welcome-card-corner top-right"></div>
        <div className="welcome-card-corner bottom-left"></div>
        <div className="welcome-card-corner bottom-right"></div>

        {/* Traditional Auspicious Ganesha Emblem */}
        <motion.div 
          className="auspicious-emblem"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg className="ganesha-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="40" stroke="#c5a059" strokeWidth="1" />
            <path d="M50 18 C52 25, 62 25, 62 32 C62 40, 48 40, 48 48 C48 56, 56 60, 54 68 C52 74, 44 76, 44 72 C44 68, 50 64, 48 58 C46 52, 38 48, 38 38 C38 28, 48 25, 50 18 Z" fill="url(#gold-grad-welcome)" />
            <path d="M42 35 Q50 30 58 35 Q50 42 42 35 Z" fill="#5a1820" />
            <circle cx="50" cy="27" r="3" fill="#d4af37" />
            <defs>
              <linearGradient id="gold-grad-welcome" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#fff2a8" />
                <stop offset="100%" stopColor="#8f743b" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Auspicious Telugu Invocation */}
        <motion.p 
          className="invocation-text font-telugu"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          ॥ శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు ॥
        </motion.p>

        <motion.p 
          className="sub-invocation font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Srirastu Subhamastu Avighnamastu
        </motion.p>

        <div className="title-divider">
          <span className="line"></span>
          <Sparkles className="sparkle-icon" size={16} />
          <span className="line"></span>
        </div>

        {/* Invitation Subtitle */}
        <motion.h3 
          className="invitation-tag font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {weddingData.title}
        </motion.h3>

        {/* Bride & Groom Names */}
        <motion.div 
          className="couple-names-wrapper"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="name-block">
            <span className="prefix-title">{groom.title}</span>
            <h1 className="groom-name gold-text-bright">{groom.name}</h1>
          </div>
          
          <div className="ampersand-wrapper">
            <span className="ampersand font-script">&</span>
          </div>

          <div className="name-block">
            <span className="prefix-title">{bride.title}</span>
            <h1 className="bride-name gold-text-bright">{bride.name}</h1>
          </div>
        </motion.div>

        {/* Date preview */}
        <p className="welcome-date-preview font-serif">
          {weddingData.wedding.displayDate}
        </p>

        {/* 3-Seconds Countdown Timer Container or Open Button */}
        <AnimatePresence mode="wait">
          {isCountingDown ? (
            <motion.div 
              key="countdown-active"
              className="timer-countdown-container"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div className="timer-ring-wrapper">
                <svg className="timer-progress-svg" viewBox="0 0 120 120">
                  <circle className="timer-bg-circle" cx="60" cy="60" r="52" />
                  <motion.circle 
                    className="timer-fill-circle" 
                    cx="60" 
                    cy="60" 
                    r="52" 
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 326.72 }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                </svg>
                <div className="timer-number-display">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={countdown}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="countdown-number-gold"
                    >
                      {countdown > 0 ? countdown : <Sparkles size={32} className="sparkle-gold-spin" />}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <div className="timer-status-text">
                <Sparkles size={16} className="sparkle-icon" />
                <span>{countdown > 0 ? `Opening Invitation in ${countdown}s...` : 'Opening Invitation...'}</span>
              </div>

              <button className="btn-skip-timer" onClick={() => onOpen()}>
                <span>Skip Timer & Open Now</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="open-button-initial"
              className="open-button-container"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <button className="btn-gold open-invitation-btn" onClick={handleOpenClick}>
                <Heart size={18} fill="currentColor" />
                <span>OPEN INVITATION</span>
                <span className="timer-pill-badge">
                  <Timer size={13} />
                  <span>3s</span>
                </span>
              </button>
              <p className="timer-subtext-hint">
                <Timer size={12} />
                <span>3 seconds countdown timer will run upon opening</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;

