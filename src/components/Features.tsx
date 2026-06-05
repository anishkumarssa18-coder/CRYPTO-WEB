import React from 'react';
import { Shield, Zap, Globe, Layers, Cpu, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap size={32} />,
    title: "Ultra-Fast Transactions",
    desc: "Experience near-instant settlement times. Our layer-1 architecture processes over 100,000 TPS, making waiting a thing of the past."
  },
  {
    icon: <Shield size={32} />,
    title: "Quantum Security",
    desc: "Secured by advanced quantum-resistant cryptography, Nexium ensures your assets remain safe from tomorrow's threats today."
  },
  {
    icon: <Globe size={32} />,
    title: "Global Accessibility",
    desc: "Access your funds from anywhere in the world. Nexium is completely decentralized and borderless, giving you financial freedom."
  },
  {
    icon: <Layers size={32} />,
    title: "Seamless Interoperability",
    desc: "Connect across multiple blockchains with ease. Our built-in bridge technology allows fluid transfer of assets between networks."
  },
  {
    icon: <Cpu size={32} />,
    title: "Smart Contracts 2.0",
    desc: "Deploy complex decentralized applications with lower gas fees and enhanced execution speeds using our optimized virtual machine."
  },
  {
    icon: <Lock size={32} />,
    title: "True Privacy",
    desc: "Take control of your data. Optional privacy layers allow you to keep your transactions confidential while maintaining compliance."
  }
];

export const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="gradient-text">Nexium</span>?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We've engineered the perfect blockchain solution that balances speed, security, and scalability without compromising decentralization.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
