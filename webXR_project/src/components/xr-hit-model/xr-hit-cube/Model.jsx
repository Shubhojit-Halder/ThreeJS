// import { OrbitControls } from "@react-three/drei";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_vieux" scale={0.7}>
          <skinnedMesh
            name="Vieux"
            geometry={nodes.Vieux.geometry}
            material={materials["color_main.001"]}
            skeleton={nodes.Vieux.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
};

useGLTF.preload("/model.gltf");
export default Model;
