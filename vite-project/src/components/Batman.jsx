import React from "react";
import * as THREE from "three";

export default function Batman() {
  const texture = new THREE.TextureLoader().load("/batman.png");

  return (
    <mesh position={[0, 2, -4.99]}>
      {/* Plane acts like a poster on the wall */}
      <planeGeometry args={[2, 1]} />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        color="black"
      />
    </mesh>
  );
}
