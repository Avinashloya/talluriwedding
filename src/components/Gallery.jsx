import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import weddingData from '../data/weddingData';
import './Gallery.css';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { gallery = [], couple: { groom, bride } } = weddingData;

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery.length]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const selectedImage = selectedIndex !== null ? gallery[selectedIndex] : null;

  return (
    <section id="gallery" className="gallery-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">
          <ImageIcon size={16} />
          <span>MEMORIES</span>
        </div>
        <h2 className="section-title gold-text font-serif">Photo Gallery</h2>
        <p className="gallery-subtitle font-serif">
          {groom.title} {groom.name} & {bride.title} {bride.name}
        </p>
        <div className="ornament-divider">
          <span className="line"></span>
          <span className="icon font-serif">📸</span>
          <span className="line"></span>
        </div>
      </motion.div>

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <motion.div 
            key={item.id || index}
            className="gallery-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={item.url} 
                alt={item.caption || `${groom.name} & ${bride.name} photo ${index + 1}`} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-hover-overlay">
                <Maximize2 size={28} className="hover-icon" color="#ffffff" />
                <span className="hover-caption font-serif">{item.caption}</span>
                {item.subcaption && (
                  <span className="hover-subcaption">{item.subcaption}</span>
                )}
              </div>
            </div>
            <div className="gallery-card-caption-bar">
              <h4 className="card-caption-title font-serif">{item.caption}</h4>
            </div>
            <div className="gallery-frame-border"></div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close-btn"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <button 
                className="lightbox-nav-btn prev-btn" 
                onClick={handlePrev}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="lightbox-image-container">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption} 
                  className="lightbox-image" 
                />
                <div className="lightbox-caption-box">
                  {selectedImage.caption && (
                    <h3 className="lightbox-caption font-serif">{selectedImage.caption}</h3>
                  )}
                  {selectedImage.subcaption && (
                    <p className="lightbox-subcaption font-serif">{selectedImage.subcaption}</p>
                  )}
                </div>
              </div>

              <button 
                className="lightbox-nav-btn next-btn" 
                onClick={handleNext}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
