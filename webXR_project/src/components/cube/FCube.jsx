import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const FCube = () => {
  const cubeRef=useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y+=delta;
    // cubeRef.current.rotation.x+=0.005;
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef}>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
};

export default FCube;
