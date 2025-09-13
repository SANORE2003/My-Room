import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Walls from "./Walls";
import Bed from "./Bed";
import Batman from "./Batman";
import TV from "./TV";
import ComputerTable from "./ComputerTable";
import Desktop from "./Desktop";
import CPU from "./CPU";
import Cupboard from "./Cupboard";

function Room() {
  return (
    <group>
      {/* Wooden Floor */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#df640cff" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation-x={Math.PI / 2} position={[0, 4, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Neon Walls */}
      <Walls />
      <Bed />
      <Batman/>
      <TV />
      <ComputerTable />
      <Desktop />
      <CPU />
      <Cupboard />
    </group>
  );
}

export default function MyRoom() {
  return (
    <Canvas 
      camera={{ position: [0, 1.5, 0], fov: 75 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 3, 0]} intensity={1.2} />

      {/* Room */}
      <Room />

      {/* Orbit Controls */}
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        enableRotate={true} 
        minDistance={0.1} 
        maxDistance={4} 
        target={[0, 1.5, -2]} 
      />
    </Canvas>
  );
}
