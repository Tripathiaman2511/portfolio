import React from 'react'
import { Canvas } from '@react-three/fiber'

function ThreeD() {
  return (
    <Canvas>
        <mesh>
            
            <boxGeometry/>
            <meshStandardMaterial/>
        </mesh>
    </Canvas>


  )
}

export default ThreeD