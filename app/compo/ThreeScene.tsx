'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => {
    const coords = new Float32Array(1000 * 3); 
    for (let i = 0; i < 1000 * 3; i++) {
      coords[i] = (Math.random() - 0.5) * 5; 
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.004} 
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  );
}

function CyberCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black">
      <Canvas 
        camera={{ position: [0, 0, 3.5] }} 
        gl={{ 
          antialias: false,
          powerPreference: "high-performance" 
        }}
        dpr={[1, 1.5]}
      >
        <ParticleField />
        <CyberCore />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
    </div>
  );
}