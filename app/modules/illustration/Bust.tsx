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
    <mesh geometry={geometry} scale={1.5} position={[0, 2, 0]}>
      <meshBasicMaterial color='#db936a' wireframe />
    </mesh>
  )
}
