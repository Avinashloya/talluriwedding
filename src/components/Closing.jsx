import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Closing.css';

const Closing = () => {
  const { bride, groom } = weddingData.couple;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="closing-section">
      <motion.div 
        className="closing-card"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="closing-gold-frame">
          <div className="closing-corner top-l"></div>
          <div className="closing-corner top-r"></div>
          <div className="closing-corner bottom-l"></div>
          <div className="closing-corner bottom-r"></div>

          {/* Sacred Lotus Emblem */}
          <div className="closing-symbol font-serif">
            🪷
          </div>

          <h2 className="closing-message gold-text-bright font-serif">
            We eagerly await your presence & divine blessings to celebrate this glorious occasion with family & friends!
          </h2>

          <div className="heart-pulse-container">
            <Heart className="heart-icon-closing" size={30} fill="#d4af37" color="#d4af37" />
          </div>

          <div className="couple-closing-name-block">
            <h3 className="closing-name-line gold-text font-serif">{groom.title} {groom.name}</h3>
            <div className="closing-amp-wrapper font-script">&</div>
            <h3 className="closing-name-line gold-text font-serif">{bride.title} {bride.name}</h3>
          </div>

          <div className="closing-divider">
            <span className="line"></span>
            <Sparkles size={16} className="sparkle" />
            <span className="line"></span>
          </div>

          <p className="closing-footer-date font-serif">
            {weddingData.wedding.displayDate} • {weddingData.venue.city}
          </p>

          <button onClick={scrollToTop} className="btn-outline-gold back-to-top-btn" title="Back to top">
            <ArrowUp size={16} />
            <span>Back To Top</span>
          </button>

          <p className="copyright-notice">
            Designed with devotion & joy for Bommana's Wedding Invitation
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Closing;
