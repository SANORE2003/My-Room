import React from "react";

export default function TV() {
  return (
    <group position={[0, 0.2, -4.9]}>
      {/* Screen */}
      <mesh>
        <boxGeometry args={[2.5, 1.5, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Screen display area */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2.3, 1.3]} />
        <meshStandardMaterial color="#111" emissive="#000" emissiveIntensity={0.5} />
      </mesh>

      {/* TV stand legs */}
      <mesh position={[-1, -0.85, 0]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[1, -0.85, 0]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}
