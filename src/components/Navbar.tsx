import React, { useState, useEffect } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="nav-logo gradient-text">
          <Hexagon color="#00ffff" size={32} />
          NEXIUM
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#tokenomics" className="nav-link">Tokenomics</a>
          <a href="#roadmap" className="nav-link">Roadmap</a>
        </div>

        <div className="nav-actions" style={{ display: 'flex', gap: '16px' }}>
          <button className="btn-secondary" style={{ padding: '8px 20px' }}>Log In</button>
          <button className="btn-primary" style={{ padding: '8px 20px', animation: 'none' }}>Buy NEX</button>
        </div>
      </div>
    </nav>
  );
};
