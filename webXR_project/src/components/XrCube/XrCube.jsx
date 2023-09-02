import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const XrCube = () => {
  const cubeRef=useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y+=delta;
    // cubeRef.current.rotation.x+=0.005;
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef} position-z={-5}>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
};

export default XrCube;
