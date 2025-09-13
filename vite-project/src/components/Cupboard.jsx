import React from "react";

export default function Cupboard() {
  return (
    <group position={[4.2, -0.85, -3]}
    rotation={[0, -Math.PI/2, 0]} > {/* Place opposite to table */}
    
      {/* Cupboard Body */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 0.8]} />
        <meshStandardMaterial color="#3b2b2b" roughness={0.6} />
      </mesh>

      {/* Doors - Left */}
      <mesh position={[-0.5, 1, 0.41]}>
        <boxGeometry args={[0.9, 1.8, 0.02]} />
        <meshStandardMaterial color="#4b2b2b" />
      </mesh>

      {/* Doors - Right */}
      <mesh position={[0.5, 1, 0.41]}>
        <boxGeometry args={[0.9, 1.8, 0.02]} />
        <meshStandardMaterial color="#4b2b2b" />
      </mesh>

      {/* Handles */}
      <mesh position={[-0.5, 1, 0.45]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 16]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
      <mesh position={[0.5, 1, 0.45]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 16]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      {/* Optional Top Shelf */}
      <mesh position={[0, 2.05, 0]}>
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#3b2b2b" />
      </mesh>
    </group>
  );
}
