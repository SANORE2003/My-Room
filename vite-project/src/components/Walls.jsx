import React from "react";

export default function Walls() {
  return (
    <group>
      {/* Front Wall */}
      <mesh position={[0, 1.5, -5]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial 
          color="#00f0ff" 
          emissive="#00f0ff" 
          emissiveIntensity={2.0} 
        />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 1.5, 5]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial 
          color="#00f0ff" 
          emissive="#00f0ff" 
          emissiveIntensity={2.0} 
        />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-5, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial 
          color="#00f0ff" 
          emissive="#00f0ff" 
          emissiveIntensity={2.0} 
        />
      </mesh>

      {/* Right Wall */}
      <mesh position={[5, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial 
          color="#00f0ff" 
          emissive="#00f0ff" 
          emissiveIntensity={2.0} 
        />
      </mesh>
    </group>
  );
}
