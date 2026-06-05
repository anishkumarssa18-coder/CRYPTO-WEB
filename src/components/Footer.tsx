import React from 'react';
import { Hexagon, Globe, Send, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#" className="nav-logo gradient-text" style={{ marginBottom: '24px', display: 'inline-flex' }}>
              <Hexagon color="#00ffff" size={32} />
              NEXIUM
            </a>
            <p>
              Pioneering the next generation of decentralized finance. Fast, secure, and built for the future of Web3.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                <Globe size={20} color="var(--secondary)" />
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                <Send size={20} color="var(--secondary)" />
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                <MessageCircle size={20} color="var(--secondary)" />
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Ecosystem</h4>
            <ul className="footer-links">
              <li><a href="#">Explorer</a></li>
              <li><a href="#">Wallet</a></li>
              <li><a href="#">Exchange</a></li>
              <li><a href="#">Bridge</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Developers</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Grants</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nexium Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
