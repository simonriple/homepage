import { Box } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Bust = dynamic(() => import('./Bust').then((mod) => mod.Bust), {
  ssr: false,
})

export const BustIllustration = () => {
  return (
    <Box height='55dvh'>
      <Canvas camera={{ position: [0, 2, 6] }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Bust />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={3} enableZoom={false} />
      </Canvas>
    </Box>
  )
}
