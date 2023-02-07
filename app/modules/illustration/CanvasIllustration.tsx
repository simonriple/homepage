import { Box } from '@chakra-ui/react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import { Vector3 } from 'three'
import { Plane } from './Plane'
export const CanvasIllustration = () => {
  return (
    <Box position='absolute' top={0} height='80vh' width='100%' zIndex={-10}>
      <Canvas camera={{ position: [0, 2.5, 6] }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Plane state={'bergen'} />
        </Suspense>
      </Canvas>
    </Box>
  )
}
