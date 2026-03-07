import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingSphere({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[0.15, 1]} />
      <meshStandardMaterial color={color} transparent opacity={0.3} wireframe />
    </mesh>
  );
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles />
        <FloatingSphere position={[-2, 1, -2]} color="#6366f1" speed={0.8} />
        <FloatingSphere position={[2, -1, -1]} color="#8b5cf6" speed={1.2} />
        <FloatingSphere position={[0, 0.5, -3]} color="#a855f7" speed={0.6} />
        <FloatingSphere position={[-1.5, -0.5, -2]} color="#6366f1" speed={1} />
        <FloatingSphere position={[1.5, 1.5, -2.5]} color="#7c3aed" speed={0.9} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
