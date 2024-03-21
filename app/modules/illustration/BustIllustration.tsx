import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Bust = dynamic(() => import('./Bust').then((mod) => mod.Bust), {
  ssr: false,
})

export const BustIllustration = () => {
  return (
    <div style={{ height: '55dvh' }}>
      <Canvas camera={{ position: [0, 2, 6] }}>
        {/* <ambientLight /> */}
        <spotLight position={[0, 4, 2]} />
        <Suspense fallback={null}>
          <Bust />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
