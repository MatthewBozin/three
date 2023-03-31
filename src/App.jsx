import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import Text from './components/Text'

function App() {
  let text = `   Matthew Bozin\nSoftware Engineer`

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3, -2.5, 0]} />
      <Box position={[0, -2.5, 0]} />
      <Box position={[3, -2.5, 0]} />
      <Text position={[0, 1, 0]} text={text} />
    </Canvas>
  )
}

export default App
