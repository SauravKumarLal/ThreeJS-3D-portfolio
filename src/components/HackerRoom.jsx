import { useGLTF, useTexture } from '@react-three/drei';

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  const monitortxt = useTexture('textures/desk/monitor.png');
  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
    </group>
  );
}
useGLTF.preload('/models/hacker-room.glb');

export default HackerRoom;



// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Author: sugaa (https://sketchfab.com/sugaa)
// License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// Source: https://sketchfab.com/3d-models/computer301-e4a2a939bb8445da8db8050e52bb645b
// Title: COMPUTER301
// */

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/scene.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group
//         position={[-6.536, 12.489, 2.269]}
//         rotation={[0, -0.234, 0]}
//         scale={[0.423, 1.152, 1.229]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_4.geometry}
//           material={materials['1COMP-CASE-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_5.geometry}
//           material={materials['COMP-BACK-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_6.geometry}
//           material={materials['COMP-FRONT-0']}
//         />
//       </group>
//       <group
//         position={[6.27, 12.359, 1.926]}
//         rotation={[0, -0.557, 0]}
//         scale={[0.608, 1.031, 0.586]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_32.geometry}
//           material={materials['1SPEAKER-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_33.geometry}
//           material={materials['SPEAKER-FRONT-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_34.geometry}
//           material={materials['SPEAKER1-0']}
//         />
//       </group>
//       <group
//         position={[-4.882, 9.825, 1.297]}
//         rotation={[0, 0.654, 0]}
//         scale={[0.608, 1.031, 0.586]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_36.geometry}
//           material={materials['1SPEAKER-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_37.geometry}
//           material={materials['SPEAKER-FRONT-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_38.geometry}
//           material={materials['SPEAKER1-0']}
//         />
//       </group>
//       <group position={[7.559, 10.458, 14.912]} rotation={[0, -0.829, 0]} scale={[1, 0.219, 1]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_44.geometry}
//           material={materials['CHAIR-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_45.geometry}
//           material={materials['1CHAIR-0']}
//         />
//       </group>
//       <group position={[4.995, 11.9, 2.587]} rotation={[0, -0.305, 0]} scale={[0.168, 0.54, 0.168]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_49.geometry}
//           material={materials['BOTTLE-0']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_50.geometry}
//           material={materials['MYBOTTLE-0']}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_8.geometry}
//         material={materials['1DESK-0']}
//         position={[0, 11.252, 1.145]}
//         scale={[8.666, 0.086, 1.767]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_10.geometry}
//         material={materials['1KB-BASE-0']}
//         position={[-1.151, 11.394, 1.584]}
//         rotation={[0, 0.268, 0]}
//         scale={[1.068, 0.502, 0.333]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_12.geometry}
//         material={materials['1KEYS-0']}
//         position={[-2.183, 11.394, 1.6]}
//         rotation={[-Math.PI, -0.268, -Math.PI]}
//         scale={[-0.042, 0.558, 0.043]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_14.geometry}
//         material={materials['1PIC-0']}
//         position={[0.003, 12.534, 0.217]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1.822, 1.36, 0.851]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_16.geometry}
//         material={materials['2PIC-0']}
//         position={[0.005, 15.335, -0.315]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[3.094, 1.36, 1.449]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_18.geometry}
//         material={materials['SCREEN-0']}
//         position={[-0.003, 12.534, 0.168]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1.879, 1.4, 0.916]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_20.geometry}
//         material={materials['2KB-0']}
//         position={[-1.151, 11.376, 1.581]}
//         rotation={[0, 0.268, 0]}
//         scale={[1.322, 0.041, 0.407]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_22.geometry}
//         material={materials['HANDLE-0']}
//         position={[-7.657, 10.024, 7.549]}
//         rotation={[-Math.PI / 2, 0, 3.032]}
//         scale={[-1, 1, 0.038]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_24.geometry}
//         material={materials['COMP-SIDE-0']}
//         position={[-6.033, 12.489, 2.389]}
//         rotation={[0, -0.234, -1.569]}
//         scale={[0.932, 0.985, 0.997]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_26.geometry}
//         material={materials['ON-OFF-0']}
//         position={[-6.771, 13.64, 3.267]}
//         rotation={[0.179, -0.23, 0.041]}
//         scale={[0.072, 0.007, 0.038]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_28.geometry}
//         material={materials['STAND-0']}
//         position={[0, 13.385, -0.408]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[2.567, 1, 2.044]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_30.geometry}
//         material={materials['1CARPET-0']}
//         position={[-0.17, 8.816, 3.725]}
//         scale={[9.597, 9.597, 5.584]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_40.geometry}
//         material={materials['3PIC-0']}
//         position={[-3.62, 12.534, 1.082]}
//         rotation={[Math.PI / 2, 0, -0.46]}
//         scale={[1.822, 1.36, 0.851]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_42.geometry}
//         material={materials['4PIC-0']}
//         position={[3.603, 12.534, 1.074]}
//         rotation={[Math.PI / 2, 0, 0.468]}
//         scale={[1.822, 1.36, 0.851]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_47.geometry}
//         material={materials['MAT-0']}
//         position={[-0.026, 11.347, 1.872]}
//         scale={[2.904, 1, 0.819]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_52.geometry}
//         material={materials['MOUSE-0']}
//         position={[0.981, 11.375, 1.744]}
//         rotation={[0, -0.544, 0]}
//         scale={[0.168, 0.109, 0.26]}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/scene.gltf')
