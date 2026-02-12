import { PresentationEngine } from './engine/PresentationEngine'
import { slides } from './slides'

function App() {
  return <PresentationEngine slides={slides} />
}

export default App
