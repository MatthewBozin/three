import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Box(props) {
  const mesh = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state) => {
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.1);
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.1);
    mesh.current.geometry.center()
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={hovered ? 1.1 : 1}
      onClick={(e) => click(!clicked)}
      onPointerOver={(e) => hover(true)}
      onPointerOut={(e) => hover(false)}>
      <boxGeometry args={[2, 3, 0.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'teal'} />
    </mesh>
  )
}

export default Box