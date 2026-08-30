import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, MapPin, Utensils, Award } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Events.css';

const Events = () => {
  const { wedding, dinner, venue } = weddingData;

  return (
    <section id="events" className="events-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <Calendar size={16} />
          <span>AUSPICIOUS CEREMONIES</span>
        </div>
        <h2 className="section-title gold-text">Wedding Muhurtham & Dinner</h2>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-serif">🪔</span>
          <span className="line"></span>
        </div>
      </motion.div>

      {/* Main Sumuhurtham Card */}
      <motion.div 
        className="sumuhurtham-grand-card"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="card-ornamental-corner top-left"></div>
        <div className="card-ornamental-corner top-right"></div>
        <div className="card-ornamental-corner bottom-left"></div>
        <div className="card-ornamental-corner bottom-right"></div>

        <div className="sumuhurtham-badge">
          <Sparkles size={16} className="sparkle" />
          <span>MAIN SUMUHURTHAM</span>
          <Sparkles size={16} className="sparkle" />
        </div>

        <h3 className="sumuhurtham-title font-serif">Auspicious Marriage Ceremony</h3>

        <div className="time-date-box">
          <div className="date-display">
            <span className="day-name">SATURDAY</span>
            <span className="date-number">05</span>
            <span className="month-year">SEPTEMBER 2026</span>
          </div>

          <div className="time-display">
            <Clock size={22} className="clock-icon" />
            <span className="exact-time">{wedding.displayTime || "11:05 P.M."}</span>
          </div>
        </div>

        {/* Astrological Details: Arudhra Nakshatrayuktha & Vrishaba Lagnam */}
        <div className="astro-details-box">
          <div className="astro-item">
            <Award className="astro-icon" size={18} />
            <div>
              <span className="astro-label">NAKSHATRAM</span>
              <span className="astro-value">{wedding.nakshatram}</span>
            </div>
          </div>
          <div className="astro-divider"></div>
          <div className="astro-item">
            <Sparkles className="astro-icon" size={18} />
            <div>
              <span className="astro-label">LAGNAM</span>
              <span className="astro-value">{wedding.lagnam}</span>
            </div>
          </div>
        </div>

        <div className="ceremony-venue-footer">
          <MapPin size={18} className="venue-pin-icon" />
          <p className="venue-note font-serif">
            Venue: <strong>{venue.name}</strong> ({venue.complex}), {venue.address}, {venue.city}
          </p>
        </div>
      </motion.div>

      {/* Dinner Gathering Card */}
      <motion.div 
        className="dinner-event-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="dinner-badge">
          <Utensils size={18} />
          <span>CELEBRATORY FEAST</span>
        </div>

        <div className="dinner-content">
          <h3 className="dinner-title font-serif">Wedding Dinner</h3>
          
          <div className="dinner-details-grid">
            <div className="dinner-detail-item">
              <Calendar size={18} className="dinner-icon" />
              <div>
                <span className="detail-label">Date</span>
                <span className="detail-val">{dinner.displayDate}</span>
              </div>
            </div>

            <div className="dinner-detail-item">
              <Clock size={18} className="dinner-icon" />
              <div>
                <span className="detail-label">Time</span>
                <span className="detail-val">{dinner.displayTime}</span>
              </div>
            </div>

            <div className="dinner-detail-item">
              <MapPin size={18} className="dinner-icon" />
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-val">{dinner.location} ({venue.name})</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
