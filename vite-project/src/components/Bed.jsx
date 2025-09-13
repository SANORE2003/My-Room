import React from "react";

export default function Bed() {
  return (
    // Position bed in a corner & invert (rotate around Y-axis)
    <group position={[-3.7, -0.85, 3]} rotation={[0, Math.PI, 0]}>
      {/* Mattress */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[2, 0.5, 4]} />
        <meshStandardMaterial color="#a01717" roughness={0.8} />
      </mesh>

      {/* Bed Frame */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2.1, 0.2, 4.1]} />
        <meshStandardMaterial color="#8B4513" roughness={0.6} />
      </mesh>

      {/* Headboard */}
      <mesh position={[0, 0.9, -2]}>
        <boxGeometry args={[2.2, 1, 0.2]} />
        <meshStandardMaterial color="#8B4513" roughness={0.6} />
      </mesh>

      {/* Pillows */}
      <mesh position={[-0.6, 0.55, -1.6]}>
        <boxGeometry args={[0.8, 0.3, 0.6]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      <mesh position={[0.6, 0.55, -1.6]}>
        <boxGeometry args={[0.8, 0.3, 0.6]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Four Legs */}
      <mesh position={[-0.95, -0.15, -1.95]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#5c3317" roughness={0.8} />
      </mesh>

      <mesh position={[0.95, -0.15, -1.95]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#5c3317" roughness={0.8} />
      </mesh>

      <mesh position={[-0.95, -0.15, 1.95]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#5c3317" roughness={0.8} />
      </mesh>

      <mesh position={[0.95, -0.15, 1.95]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#5c3317" roughness={0.8} />
      </mesh>
    </group>
  );
}
