import React from 'react'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import * as THREE from 'three'
import * as Roboto from '../assets/fonts/Roboto Condensed_Regular.json'
import { useFrame } from '@react-three/fiber'

const Text = ({position, text}) => {
  const font = new FontLoader().parse(Roboto)

  const mesh = React.useRef()

  useFrame((state) => (
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.1),
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.1),
    mesh.current.geometry.center()
  ))

  const textGeometry = new TextGeometry(text, {
    font: font,
    size: 1,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: false,
  })
  
  return (
    <mesh ref={mesh} position={position}>
      <meshBasicMaterial attach="material" color="teal" />
      <primitive attach="geometry" object={textGeometry} />
    </mesh>
  )
}

export default Text