import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function NeuralParticles({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const ref = useRef<THREE.Points>(null);
  
  const [positions] = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = time * 0.02 + mouse.current[1] * 0.1;
      ref.current.rotation.y = time * 0.015 + mouse.current[0] * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c5a059"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingShapes({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef1.current) {
      meshRef1.current.position.y = Math.sin(time * 0.5) * 0.5 + 1;
      meshRef1.current.rotation.x = time * 0.2 + mouse.current[1] * 0.2;
      meshRef1.current.rotation.y = time * 0.3 + mouse.current[0] * 0.2;
    }
    if (meshRef2.current) {
      meshRef2.current.position.x = Math.cos(time * 0.3) * 1.5 + 4;
      meshRef2.current.position.y = Math.sin(time * 0.4) * 1 - 2;
      meshRef2.current.rotation.z = time * 0.5;
    }
    if (meshRef3.current) {
      meshRef3.current.position.x = Math.sin(time * 0.2) * 2 - 4;
      meshRef3.current.position.y = Math.cos(time * 0.3) * 1 + 2;
      meshRef3.current.rotation.x = time * 0.4;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef1} position={[3, 1, -2]}>
          <icosahedronGeometry args={[1, 15]} />
          <MeshDistortMaterial 
            color="#c5a059" 
            speed={2} 
            distort={0.4} 
            radius={1} 
            transparent 
            opacity={0.4}
            wireframe
          />
        </mesh>
      </Float>

      <mesh ref={meshRef2} position={[5, -2, -5]}>
        <torusGeometry args={[1, 0.05, 16, 100]} />
        <MeshWobbleMaterial color="#c5a059" speed={1} factor={0.6} transparent opacity={0.2} />
      </mesh>

      <mesh ref={meshRef3} position={[-5, 2, -4]}>
        <tetrahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#c5a059" 
          wireframe 
          transparent 
          opacity={0.15} 
          metalness={1}
          roughness={0}
        />
      </mesh>
    </>
  );
}

function CameraRig({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  useFrame((state) => {
    state.camera.position.lerp(
      new THREE.Vector3(mouse.current[0] * 2, mouse.current[1] * 2, 8),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  const mouse = useRef<[number, number]>([0, 0]);

  const onMouseMove = (e: React.MouseEvent) => {
    mouse.current = [
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1,
    ];
  };

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-luxury-white"
      onMouseMove={onMouseMove as any}
    >
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <color attach="background" args={['#ffffff']} />
        
        <NeuralParticles mouse={mouse} />
        <FloatingShapes mouse={mouse} />
        <CameraRig mouse={mouse} />

        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#c5a059" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#C8A96B" />
        
        <fog attach="fog" args={['#ffffff', 5, 20]} />
      </Canvas>
    </div>
  );
}
