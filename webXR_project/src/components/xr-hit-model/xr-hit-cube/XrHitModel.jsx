import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Model from "./Model";



const XrHitModel = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const {isPresenting} = useXR();

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });
  const placeModel = (e) => {
    console.log(e);
    let position = e.intersection.object.position;
    let id = Date.now();
    setModels([{ position, id }]);
  };
  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          return <Model position={position} key={id} />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <Model/>}
    </>
  );
};

export default XrHitModel;
