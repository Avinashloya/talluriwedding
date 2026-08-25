import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Award } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Family.css';

const Family = () => {
  const { brideParents, groomParents, invitedBy, bestCompliments } = weddingData;

  return (
    <section id="family" className="family-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <Users size={16} />
          <span>FAMILY & BLESSINGS</span>
        </div>
        <h2 className="section-title gold-text">Family & Hosts</h2>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-script">🪷</span>
          <span className="line"></span>
        </div>
      </motion.div>

      {/* Parents Grid */}
      <div className="family-cards-grid">
        {/* Groom's Parents Card */}
        <motion.div
          className="family-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card-top-icon">
            <span className="family-role-tag font-serif">Groom's Parents</span>
          </div>

          <h3 className="family-card-heading font-serif">Parents of Chi. Nagaraju</h3>

          <div className="parent-names font-serif">
            <p className="parent-name">{groomParents.father}</p>
            <span className="and-symbol font-script">&</span>
            <p className="parent-name">{groomParents.mother}</p>
          </div>
        </motion.div>

        {/* Center Heart Separator */}
        <div className="family-divider-center">
          <Heart size={22} className="heart-center-icon" fill="currentColor" />
        </div>

        {/* Bride's Parents Card */}
        <motion.div
          className="family-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="card-top-icon">
            <span className="family-role-tag font-serif">Bride's Parents</span>
          </div>

          <h3 className="family-card-heading font-serif">Parents of Chi. La. Sow. Geetha Sai Pravallika</h3>

          <div className="parent-names font-serif">
            <p className="parent-name">{brideParents.father}</p>
            <span className="and-symbol font-script">&</span>
            <p className="parent-name">{brideParents.mother}</p>
          </div>
        </motion.div>
      </div>

      {/* Invited By & Best Compliments Container */}
      <motion.div 
        className="invitation-hosts-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Invited By Section */}
        <div className="invited-by-block">
          <h3 className="hosts-block-title font-serif gold-text-bright">
            <Sparkles size={18} className="sparkle" />
            <span>Invited By</span>
            <Sparkles size={18} className="sparkle" />
          </h3>
          
          <div className="hosts-list">
            {invitedBy.map((person, idx) => (
              <div key={idx} className="host-card">
                <span className="host-title">{person.title}</span>
                <span className="host-name font-serif">{person.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* With Best Compliments From Section */}
        <div className="compliments-block">
          <h3 className="hosts-block-title font-serif gold-text-bright">
            <Award size={18} className="sparkle" />
            <span>With Best Compliments From</span>
            <Award size={18} className="sparkle" />
          </h3>

          <div className="compliments-grid">
            {bestCompliments.map((name, idx) => (
              <div key={idx} className="compliment-item font-serif">
                <span className="bullet">❖</span>
                <span className="compliment-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Family;
