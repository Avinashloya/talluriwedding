import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import Thoranam from './Thoranam';
import './Hero.css';

const Hero = () => {
  const { bride, groom } = weddingData.couple;
  const { wedding, venue, brideParents, groomParents, openingText, title } = weddingData;

  return (
    <section id="hero" className="hero-section">
      {/* South Indian Mango Leaf Thoranam Header Decoration */}
      <Thoranam />

      <motion.div 
        className="invitation-card-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="invitation-card-border">
          {/* Traditional Corner Ornaments */}
          <div className="corner-decor top-left"></div>
          <div className="corner-decor top-right"></div>
          <div className="corner-decor bottom-left"></div>
          <div className="corner-decor bottom-right"></div>

          {/* Sacred Invocation Header */}
          <div className="hero-sacred-header">
            <span className="om-symbol font-telugu">॥ శ్రీరామచంద్ర పరబ్రహ్మణే నమః ॥</span>
          </div>

          <div className="ornament-divider">
            <span className="line"></span>
            <span className="icon font-serif">❖</span>
            <span className="line"></span>
          </div>

          {/* Main Invitation Title */}
          <h2 className="hero-invitation-title gold-text-bright font-serif">
            {title}
          </h2>

          {/* Opening Solicit Text as requested */}
          <p className="solicit-text font-serif">
            "{openingText}"
          </p>

          {/* Groom Block */}
          <motion.div 
            className="person-block groom-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="person-title font-serif">{groom.title}</p>
            <h1 className="person-name gold-text">{groom.name}</h1>
            <p className="person-subdetail">
              ({groom.relation} of {groomParents.father} & {groomParents.mother})
            </p>
          </motion.div>

          {/* Grand Sacred Wedding Knot Icon */}
          <div className="wedding-knot">
            <span className="knot-line"></span>
            <div className="weds-badge font-script">
              <span>weds</span>
            </div>
            <span className="knot-line"></span>
          </div>

          {/* Bride Block */}
          <motion.div 
            className="person-block bride-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="person-title font-serif">{bride.title}</p>
            <h1 className="person-name gold-text">{bride.name}</h1>
            <p className="person-subdetail">
              ({bride.relation} of {brideParents.mother} & {brideParents.father})
            </p>
          </motion.div>

          {/* Decorative Divider */}
          <div className="ornament-divider hero-lower-divider">
            <span className="line"></span>
            <Sparkles className="icon" size={16} />
            <span className="line"></span>
          </div>

          {/* Key Event Summary Cards */}
          <div className="hero-event-summary">
            <div className="summary-item">
              <Calendar className="summary-icon" size={20} />
              <div>
                <span className="summary-label font-serif">Date</span>
                <p className="summary-value">{wedding.displayDate}</p>
              </div>
            </div>

            <div className="summary-item">
              <Clock className="summary-icon" size={20} />
              <div>
                <span className="summary-label font-serif">Sumuhurtham</span>
                <p className="summary-value">{wedding.displayTime}</p>
              </div>
            </div>

            <div className="summary-item">
              <MapPin className="summary-icon" size={20} />
              <div>
                <span className="summary-label font-serif">Venue</span>
                <p className="summary-value">{venue.name}, {venue.city}</p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
