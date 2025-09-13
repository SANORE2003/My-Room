import React from "react";

export default function ComputerTable() {
  return (
    <group position={[3.1, -0.85, 4]}>
      {/* Tabletop */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[3, 0.2, 1.5]} />
        <meshStandardMaterial color="#4b2e2e" roughness={0.6} />
      </mesh>

      {/* Legs */}
      <mesh position={[-1.4, 0.5, -0.65]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#3b1f1f" />
      </mesh>
      <mesh position={[1.4, 0.5, -0.65]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#3b1f1f" />
      </mesh>
      <mesh position={[-1.4, 0.5, 0.65]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#3b1f1f" />
      </mesh>
      <mesh position={[1.4, 0.5, 0.65]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#3b1f1f" />
      </mesh>
    </group>
  );
}
