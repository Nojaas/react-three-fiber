import React, { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { BoxGeometry, CircleGeometry, MeshBasicMaterial } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Circle = () => {
  const circleRef = useRef();

  useFrame(() => {
    if (circleRef.current) {
      circleRef.current.rotation.x += 0.01;
      circleRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={circleRef}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial />
    </mesh>
  );
};

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableRotate={true} // Activer la rotation
      enableZoom={true} // Activer le zoom
      enablePan={true} // Activer le déplacement
      rotateSpeed={0.5} // Vitesse de rotation
      zoomSpeed={1.2} // Vitesse de zoom
      panSpeed={0.8} // Vitesse de déplacement
      minPolarAngle={Math.PI / 2} // Angle d'inclinaison minimum (en radians)
      maxPolarAngle={Math.PI / 2.5} // Angle d'inclinaison maximum (en radians)
    />
  );
};

const AnimatedCircle = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>

        <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Controls />
        <Circle />
        </Canvas>
    </div>
  );
};

export default AnimatedCircle;
