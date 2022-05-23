import { Toaster } from 'react-hot-toast'
import { ImagesPage } from './components'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Toaster />
      <ImagesPage />
    </div>
  )
}

export default App
