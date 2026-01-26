'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// ส่วนของอนุภาค (Stars/Data Particles)
function ParticleField(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const coords = new Float32Array(3000 * 3); // เพิ่มจำนวนจุดให้ดูหนาแน่นขึ้น
    for (let i = 0; i < 3000 * 3; i++) {
      coords[i] = (Math.random() - 0.5) * 4; // กระจายวงกว้างขึ้น
    }
    return coords;
  });

  useFrame((state, delta) => {
    // หมุนอัตโนมัติ
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;

    // ขยับตามเมาส์ (Parallax Effect)
    const x = state.mouse.x * 0.2;
    const y = state.mouse.y * 0.2;
    ref.current.rotation.x += (y - ref.current.rotation.x) * delta * 0.5;
    ref.current.rotation.y += (x - ref.current.rotation.y) * delta * 0.5;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.003} // เล็กลงนิดหน่อยเพื่อให้ดูละเอียด
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending} // เพิ่มความสว่างแบบนีออน
        />
      </Points>
    </group>
  );
}

// ส่วนของแกนกลาง (Wireframe Core)
function CyberCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Core หมุน
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.4;
    
    // Outer Ring หมุนสวนทาง
    outerRef.current.rotation.x = -t * 0.2;
    outerRef.current.rotation.z = t * 0.1;

    // Pulse Effect
    const scale = 1 + Math.sin(t * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
    
    // Mouse Interaction
    meshRef.current.position.x = state.mouse.x * 0.5;
    meshRef.current.position.y = state.mouse.y * 0.5;
  });

  return (
    <group>
      {/* Inner Core */}
      <Float speed={5} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshBasicMaterial color="#4F46E5" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>
      
      {/* Outer Ring */}
      <mesh ref={outerRef} scale={1.5}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black">
      <Canvas camera={{ position: [0, 0, 3] }} gl={{ antialias: true }}>
        <fog attach="fog" args={['#050505', 1, 6]} />
        <ParticleField />
        <CyberCore />
      </Canvas>
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 opacity-90" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}