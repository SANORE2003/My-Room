import React from "react";

export default function CPU() {
  return (
    <group position={[2.5, -1.0, 4]}> {/* Adjust position near monitor */}
      {/* CPU Body */}
      <mesh>
        <boxGeometry args={[0.6, 1.2, 0.8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Front Panel */}
      <mesh position={[0, 0, 0.41]}>
        <planeGeometry args={[0.55, 1.1]} />
        <meshStandardMaterial color="#fb1111ff" />
      </mesh>

      {/* Power Button */}
      <mesh position={[0.2, -0.4, 0.42]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 32]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Drive Bay */}
      <mesh position={[0, 0.3, 0.42]}>
        <boxGeometry args={[0.4, 0.1, 0.02]} />
        <meshStandardMaterial color="White" />
      </mesh>

      {/* Ventilation Strip */}
      <mesh position={[-0.28, 0, 0.42]}>
        <boxGeometry args={[0.02, 0.8, 0.02]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
