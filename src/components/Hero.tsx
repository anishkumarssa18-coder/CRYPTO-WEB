import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Coin3D } from './Coin3D';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--glass-bg)', borderRadius: '30px', border: '1px solid var(--glass-border)', marginBottom: '24px', color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--secondary)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--secondary)' }}></span>
            Nexium Presale is Live
          </div>
          
          <h1 className="hero-title">
            The Future of <span className="gradient-text">Decentralized</span> Finance is Here
          </h1>
          
          <p className="hero-subtitle">
            Experience lightning-fast transactions, zero gas fees, and military-grade security. Join the Nexium ecosystem and be part of the next revolution in Web3.
          </p>
          
          <div className="hero-cta">
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Get Started <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Read Whitepaper
            </button>
          </div>
          
          <div style={{ marginTop: '40px', display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '-10px' }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', background: `var(--primary)`, border: '2px solid var(--bg-color)', marginLeft: i > 1 ? '-15px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  U{i}
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>50K+</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Active Users</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-3d-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <Suspense fallback={null}>
              <Environment preset="city" />
              <Coin3D />
              <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4} color="#8a2be2" />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};
