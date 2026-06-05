import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const Coin3D = () => {
  const coinGroupRef = useRef<any>(null);

  useFrame((state) => {
    if (coinGroupRef.current) {
      // Rotate around Y axis for a spinning coin effect
      coinGroupRef.current.rotation.y += 0.012;
      coinGroupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={1.5}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#b140a6" />
      <directionalLight position={[-5, -5, -5]} intensity={1} color="#6a11cb" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#ffffff" />
      <pointLight position={[0, 0, -3]} intensity={1.5} color="#ffffff" />

      {/* Group rotated so the coin faces the camera initially */}
      <group ref={coinGroupRef} rotation={[0, 0, 0]}>
        
        {/* Main Coin Body */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2, 2, 0.3, 64]} />
          <meshStandardMaterial 
            color="#111111"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Outer Ring / Edge */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2.05, 2.05, 0.32, 64]} />
          <meshStandardMaterial 
            color="#b140a6"
            metalness={1}
            roughness={0.2}
            emissive="#551a55"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Inner Engraved Circle - Front */}
        <mesh position={[0, 0, 0.16]}>
          <ringGeometry args={[1.5, 1.6, 64]} />
          <meshStandardMaterial color="#b140a6" emissive="#b140a6" emissiveIntensity={0.5} side={THREE.DoubleSide} />
        </mesh>

        {/* Inner Engraved Circle - Back */}
        <mesh position={[0, 0, -0.16]}>
          <ringGeometry args={[1.5, 1.6, 64]} />
          <meshStandardMaterial color="#b140a6" emissive="#b140a6" emissiveIntensity={0.5} side={THREE.DoubleSide} />
        </mesh>

        {/* Coin Text - Front */}
        <Text 
          position={[0, 0.3, 0.16]} 
          fontSize={0.6} 
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          AICM
        </Text>
        
        {/* Coin Symbol - Front */}
        <Text 
          position={[0, -0.4, 0.16]} 
          fontSize={1.2} 
          color="#b140a6"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          $
        </Text>

        {/* Coin Text - Back (rotated to be readable when coin flips) */}
        <Text 
          position={[0, 0.3, -0.16]} 
          rotation={[0, Math.PI, 0]}
          fontSize={0.6} 
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          AICM
        </Text>
        
        {/* Coin Symbol - Back */}
        <Text 
          position={[0, -0.4, -0.16]} 
          rotation={[0, Math.PI, 0]}
          fontSize={1.2} 
          color="#b140a6"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          $
        </Text>
      </group>
    </Float>
  );
};
