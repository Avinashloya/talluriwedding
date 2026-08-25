import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hourglass, Heart } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isArrived: false
  });

  useEffect(() => {
    // Target: Friday, 04 September 2026 at 9:43 PM (21:43)
    const targetDate = new Date(`${weddingData.wedding.date}T${weddingData.wedding.time}:00+05:30`);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isArrived: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isArrived: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section">
      <motion.div 
        className="countdown-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="countdown-header">
          <Hourglass className="hourglass-icon spin-slow" size={24} />
          <h2 className="countdown-heading gold-text">Auspicious Countdown To Sumuhurtham</h2>
        </div>

        {timeLeft.isArrived ? (
          <div className="arrived-message">
            <Heart size={36} fill="#d4af37" color="#d4af37" />
            <h3 className="arrived-text gold-text-bright">Today is the Divine Marriage Day! 🎉</h3>
            <p>The auspicious wedding celebrations have arrived. We welcome your blessings!</p>
          </div>
        ) : (
          <div className="timer-grid">
            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">DAYS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">HOURS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">MINS</span>
            </div>

            <div className="timer-colon">:</div>

            <div className="timer-unit">
              <div className="unit-card">
                <span className="unit-number gold-text">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="unit-label font-serif">SECS</span>
            </div>
          </div>
        )}

        <p className="countdown-footnote font-serif">
          Friday, 04 September 2026 • 9:43 PM (Rohini Nakshatrayuktha • Vrushabha Lagnam)
        </p>
      </motion.div>
    </section>
  );
};

export default Countdown;
