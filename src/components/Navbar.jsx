import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Users, Heart, Camera } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Invitation', href: '#hero', icon: Heart },
    { name: 'Sumuhurtham', href: '#events', icon: Calendar },
    { name: 'Venue', href: '#venue', icon: MapPin },
    { name: 'Photos', href: '#gallery', icon: Camera },
    { name: 'Family & Hosts', href: '#family', icon: Users },
  ];

  return (
    <nav className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#hero" className="nav-brand font-serif">
          <span className="brand-icon font-script">N</span>
          <span className="brand-amp font-script">&</span>
          <span className="brand-icon font-script">P</span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-links">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.name} href={link.href} className="nav-item font-serif">
                <Icon size={15} className="nav-icon" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-item font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon size={18} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
