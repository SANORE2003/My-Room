import React from "react";

export default function Desktop() {
  return (
    <group position={[3.7, 1.6, 4]}>
      {/* Monitor Frame */}
      <mesh position ={[0.5, -0.7, 1]}>
        <boxGeometry args={[1.8, 1.2, 0.1]} />
        <meshStandardMaterial color="White" />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 7, 0.6]}>
        <planeGeometry args={[1.6, 1]} />
        <meshStandardMaterial color="#ec0c0cff" emissive="#ec1010ff" emissiveIntensity={0.4} />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.05, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="White" />
      </mesh>
      <mesh position={[0, -1.3, 0]}>
        <boxGeometry args={[0.6, 0.1, 0.4]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}
