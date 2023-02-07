import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {
  Material,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  TextureLoader,
} from 'three'

type PlaneState = 'bergen' | 'wave'
export const Plane = ({ state }: { state: PlaneState }) => {
  const planeMaterialRef = useRef<MeshStandardMaterial>(null!)
  const planeGeometryRef = useRef<PlaneGeometry>(null!)

  const displacementMap = useLoader(TextureLoader, '/height.png')
  const alphaMap = useLoader(TextureLoader, '/alpha.jpeg')

  useFrame(({ clock }) => {
    if (
      planeMaterialRef.current &&
      planeMaterialRef.current.displacementScale <= 1.4
    ) {
      planeMaterialRef.current.displacementScale =
        ((Math.sin(clock.getElapsedTime()) + 1) / 2) * 1.5
    }
  })

  useFrame(({ clock }) => {
    if (planeGeometryRef.current) {
      const geometry = planeGeometryRef.current
      let { position } = geometry.attributes
      for (let i = 0; i < position.count; i++) {
        ;(position.array as unknown as Array<number>)[i * 3 + 2] =
          0.02 *
          Math.sin(4 * position.array[i * 3 + 1] + clock.getElapsedTime())
      }
      position.needsUpdate = true
      geometry.computeVertexNormals()
    }
  })

  return (
    <mesh rotation={[-Math.PI / 2, 0, 1.75]}>
      <planeGeometry ref={planeGeometryRef} args={[10, 10, 70, 70]} />
      <meshStandardMaterial
        ref={planeMaterialRef}
        wireframe
        color='#a8a8a6'
        displacementMap={state === 'bergen' ? displacementMap : undefined}
        displacementScale={0}
        alphaMap={alphaMap}
        transparent
      />
    </mesh>
  )
}
