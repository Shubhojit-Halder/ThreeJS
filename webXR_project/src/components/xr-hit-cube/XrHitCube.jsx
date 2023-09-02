import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Cube from "./Cube";
import FCube from "../cube/FCube";

const XrHitCube = () => {
  const reticleRef = useRef();
  const [cubes, setCubes] = useState([]);
  const {isPresenting} = useXR();

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });
  const placeCube = (e) => {
    console.log(e);
    let position = e.intersection.object.position;
    let id = Date.now();
    setCubes([...cubes, { position, id }]);
  };
  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        cubes.map(({ position, id }) => {
          return <Cube position={position} key={id} />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <Cube/>}
    </>
  );
};

export default XrHitCube;
