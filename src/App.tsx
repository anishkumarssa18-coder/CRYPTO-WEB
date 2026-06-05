import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, Layers } from 'lucide-react';
import { Coin3D } from './components/Coin3D';

function App() {
  return (
    <>
      {/* Immersive 3D Background */}
      <div className="canvas-background">
        {/* We place the camera back a bit more to make the coin look huge in the background */}
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <group position={[4.5, -0.5, 0]}>
              <Coin3D />
              <ContactShadows position={[0, -4, 0]} opacity={0.6} scale={30} blur={3} far={10} color="#b140a6" />
            </group>
            {/* autoRotate is handled inside Coin3D or we can let OrbitControls do it */}
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
        
        {/* Subtle overlay to ensure text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 0%, var(--bg-color) 100%)', zIndex: 1 }} />
      </div>

      {/* Foreground Content */}
      <div className="container">
        <nav className="navbar">
          <div className="logo metallic-text">AICM</div>
          <button className="btn-primary" style={{ padding: '12px 32px', fontSize: '0.9rem' }}>Connect Wallet</button>
        </nav>

        <main>
          {/* Centered Hero */}
          <section className="hero">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="hero-title">
                The Next Era of <br />
                <span className="metallic-text">E-Commerce</span>
              </h1>
              <p className="hero-subtitle">
                An AI-powered, blockchain-driven marketplace designed for trading physical goods, digital products, and elite services.
              </p>
              <button className="btn-primary">Explore Marketplace</button>
            </motion.div>
          </section>

          {/* Bento Box Grid */}
          <section className="bento-section">
            <div className="bento-grid">
              
              {/* Massive Stat Block */}
              <motion.div 
                className="bento-item bento-large glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="metallic-text stat-huge" style={{ fontSize: '3rem' }}>AI Powered</div>
                  <h3 className="bento-title">Smart Marketplace</h3>
                </div>
                <p className="bento-desc">
                  Powered by advanced AI algorithms, AICM matches buyers and sellers seamlessly. Whether it's custom apparel, digital assets, or freelance services, our ecosystem ensures secure, transparent, and scalable trading with the $AICM token.
                </p>
              </motion.div>

              {/* Small Feature 1 */}
              <motion.div 
                className="bento-item glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bento-icon"><Layers size={28} /></div>
                <h3 className="bento-title" style={{ fontSize: '1.4rem' }}>All-in-One</h3>
                <p className="bento-desc">Trade physical, digital, and freelance services in one place.</p>
              </motion.div>

              {/* Small Feature 2 */}
              <motion.div 
                className="bento-item glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bento-icon"><Shield size={28} /></div>
                <h3 className="bento-title" style={{ fontSize: '1.4rem' }}>Secure</h3>
                <p className="bento-desc">Blockchain verification guarantees authenticity and safety.</p>
              </motion.div>

              {/* Wide Feature */}
              <motion.div 
                className="bento-item bento-wide glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center', height: '100%' }}>
                  <div className="bento-icon" style={{ marginBottom: 0, flexShrink: 0, width: '80px', height: '80px' }}>
                    <Cpu size={40} />
                  </div>
                  <div>
                    <h3 className="bento-title">$AICM Token Ecosystem</h3>
                    <p className="bento-desc">
                      Transact natively using our ERC-20 token on the Ethereum blockchain. Earn rewards, get exclusive benefits, and fuel the decentralized commerce revolution.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Final Stat Block */}
              <motion.div 
                className="bento-item glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="metallic-text stat-huge" style={{ fontSize: '2.5rem' }}>1M+</div>
                <p className="bento-desc">Active Traders</p>
              </motion.div>

              <motion.div 
                className="bento-item glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="metallic-text stat-huge" style={{ fontSize: '2.5rem' }}>100%</div>
                <p className="bento-desc">Decentralized</p>
              </motion.div>

            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="logo metallic-text" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>AICM</div>
          <p>&copy; {new Date().getFullYear()} AICM Store. The Future of AI & E-Commerce.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
