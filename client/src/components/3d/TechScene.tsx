import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FloatingGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = 1.2;
      gridRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
      gridRef.current.position.y = -2;
    }
  });

  return (
    <group ref={gridRef}>
      <gridHelper args={[30, 30, 0x0ea5e9, 0x0ea5e9]} position={[0, 0, 0]} />
    </group>
  );
}

function TechShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.3}
          roughness={0}
          metalness={1}
        />
      </mesh>
      <mesh ref={meshRef} position={[2, 0, 0]} scale={0.9}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.1}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

export default function TechScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <TechShape />
        {/* <FloatingGrid /> */}
        
        <fog attach="fog" args={['#0f172a', 5, 20]} />
      </Canvas>
    </div>
  );
}
