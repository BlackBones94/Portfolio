import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005
  })
  // Return view, these are regular three.js elements expressed in JSX




  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <torusKnotGeometry args={[3,0.2,32,32  ]} attach={"geometry"}/>
      <meshStandardMaterial color={hovered ? 'white' : 'orange'} attach={"material"} wireframe />
    </mesh>
  )
}

export default Box;