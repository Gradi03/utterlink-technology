"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function NetworkSphere() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
      ref.current.rotation.x += 0.0008;
    }
  });
  // Memoized geometry for performance
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(5, 32, 32);
    return geo;
  }, []);

  // 3D background

  return (
    <group ref={ref}>
      {/* Dots (points) */}
      <points geometry={geometry}>
        <pointsMaterial color="#4caf50" size={0.1} />
      </points>

      {/* Lines (wireframe) */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#4caf50"
          wireframe
          opacity={0.2}
          transparent
        />
      </mesh>
    </group>
  );
}

export default function ThreeDBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#f5f5dc"]} /> {/* Cream background */}
      <ambientLight intensity={0.5} />
      <NetworkSphere />
    </Canvas>
  );
}
