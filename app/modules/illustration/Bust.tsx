import { useFrame, useLoader } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  DoubleSide,
  Mesh,
  ShaderMaterial,
  Uniform,
} from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import holographicFragmentShader from './shaders/holographic/fragment.glsl'
import holographicVertexShader from './shaders/holographic/vertex.glsl'

export const Bust = () => {
  const meshRef = useRef<Mesh<BufferGeometry, ShaderMaterial>>(null)

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

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      const elapsedTime = clock.getElapsedTime()
      meshRef.current.material.uniforms.uTime.value = elapsedTime
      meshRef.current?.rotateY(Math.sin(elapsedTime) * 0.01)
    }
  })
  const uniforms = {
    uTime: new Uniform(0),
    uColor: new Uniform(new Color('#b8ffff')),
  }
  return (
    <mesh
      geometry={geometry}
      scale={1.8}
      position={[0, 2.5, 0]}
      rotation={[0, -1, 0]}
      ref={meshRef}
    >
      {/* <meshPhongMaterial color='#51B2B2' /> */}
      {/* <meshMatcapMaterial color='#51B2B2' /> */}
      {/* <meshBasicMaterial color='#51B2B2' wireframe /> */}
      {/* <pointsMaterial color='#51B2B2' size={0.015} /> */}
      <shaderMaterial
        vertexShader={holographicVertexShader}
        fragmentShader={holographicFragmentShader}
        uniforms={uniforms}
        transparent
        side={DoubleSide}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </mesh>
  )
}
