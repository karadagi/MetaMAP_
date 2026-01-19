
import React, { useRef, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Building = ({ position, args, color }: { position: [number, number, number], args: [number, number, number], color: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={hovered ? '#10b981' : color}
        roughness={0.1}
        metalness={0.1}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(...args)]} />
        <lineBasicMaterial color="#000000" opacity={0.05} transparent />
      </lineSegments>
    </mesh>
  );
};

const OSMModel = () => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'OSM.glb');
  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} />;
};

const GBAModel = () => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'GBA.glb');
  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} />;
};

const City = ({ mode }: { mode: 'osm' | 'atlas' | 'terrain' }) => {
  const buildings = useMemo(() => {
    if (mode === 'osm' || mode === 'atlas') return [];

    const data = [];
    const count = 35;
    const spread = 20;

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;
      const h = Math.random() * 10 + 2;
      const w = Math.random() * 1.8 + 0.6;
      const d = Math.random() * 1.8 + 0.6;
      const y = h / 2;

      data.push({
        id: i,
        position: [x, y, z] as [number, number, number],
        args: [w, h, d] as [number, number, number],
        color: '#ffffff'
      });
    }
    return data;
  }, [mode]);

  if (mode === 'osm' || mode === 'atlas') {
    return (
      <group>
        {mode === 'osm' ? <OSMModel /> : <GBAModel />}
        <Grid
          infiniteGrid
          fadeDistance={50}
          fadeStrength={3}
          sectionSize={2}
          sectionColor="#e2e8f0"
          sectionThickness={1}
          cellSize={1}
          cellColor="#f1f5f9"
          cellThickness={0.5}
        />
      </group>
    );
  }

  return (
    <group>
      {buildings.map((b) => (
        <Building key={b.id} {...b} />
      ))}
      <Grid
        infiniteGrid
        fadeDistance={50}
        fadeStrength={3}
        sectionSize={2}
        sectionColor="#e2e8f0"
        sectionThickness={1}
        cellSize={1}
        cellColor="#f1f5f9"
        cellThickness={0.5}
      />
    </group>
  );
};

export const InteractiveDemo: React.FC = () => {
  const [mode, setMode] = useState<'osm' | 'atlas' | 'terrain'>('osm');

  return (
    <div className="w-full h-[650px] bg-neutral-50 rounded-3xl overflow-hidden relative border border-neutral-100 shadow-xl shadow-neutral-200/50">
      <div className="absolute top-6 left-6 z-10 flex flex-col space-y-4">
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-neutral-200 shadow-sm max-w-[280px]">
          <h3 className="font-bold text-neutral-900 mb-1">Architectural Context</h3>
          <p className="text-xs text-neutral-500 leading-relaxed">High-fidelity geometry generated directly from cloud spatial databases.</p>
        </div>

        <div className="flex bg-white/90 backdrop-blur-md p-1 rounded-full border border-neutral-200 shadow-sm self-start">
          <button
            onClick={() => setMode('osm')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${mode === 'osm' ? 'bg-emerald-600 text-white shadow-md' : 'text-neutral-500 hover:bg-neutral-100'}`}
          >
            OSM Buildings
          </button>
          <button
            onClick={() => setMode('atlas')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${mode === 'atlas' ? 'bg-emerald-600 text-white shadow-md' : 'text-neutral-500 hover:bg-neutral-100'}`}
          >
            Building Atlas
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200 text-[10px] text-neutral-400 font-mono tracking-tighter shadow-sm">
          ENGINE: LIGHTWEIGHT_GEOMETRY_V2.1
        </div>
      </div>

      <Canvas shadows gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[20, 20, 20]} fov={35} />
        <OrbitControls enableDamping dampingFactor={0.05} minDistance={10} maxDistance={60} />

        <ambientLight intensity={0.8} />
        <directionalLight
          position={[10, 40, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, 20, -10]} intensity={0.5} />

        <City mode={mode} />

        <fog attach="fog" args={['#fafafa', 30, 80]} />
        <color attach="background" args={['#fafafa']} />
      </Canvas>
    </div>
  );
};
