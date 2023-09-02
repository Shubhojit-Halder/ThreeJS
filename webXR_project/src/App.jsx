import { Route, Routes } from 'react-router-dom'
import './App.css'
import XrCubeContainer from './components/XrCube/XrCubeContainer'
import CubeContainer from './components/cube/CubeContainer'
import XrHitCubeContainer from './components/xr-hit-cube/XrHitCubeContainer'
import XrHitModelContainer from './components/xr-hit-model/xr-hit-cube/XrHitModelContainer'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<XrHitModelContainer/>}/>
        <Route path='/xr' element={<XrCubeContainer/>}/>
        <Route path='/xr-hit' element={<XrHitCubeContainer/>}/>
        <Route path='/xr-model' element={<XrHitModelContainer/>}/>
      </Routes>
    </>
  )
}

export default App
