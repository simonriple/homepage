import { useLoader } from '@react-three/fiber'
import { useMemo } from 'react'
import { Mesh } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export const Bust = () => {
  const obj = useLoader(OBJLoader, '/bust.obj')
  const geometry = useMemo(() => {
    let g
    obj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c as Mesh
        g = _c.geometry
      }
    })
    return g
  }, [obj])

  return (
    <points
      geometry={geometry}
      scale={2}
      position={[0, 2.5, 0]}
      rotation={[0, -1, 0]}
    >
      {/* <meshPhongMaterial color='#51B2B2' /> */}
      {/* <meshMatcapMaterial color='#51B2B2' /> */}
      {/* <meshBasicMaterial color='#51B2B2' wireframe /> */}
      <pointsMaterial color='#51B2B2' size={0.015} />
    </points>
  )
}
