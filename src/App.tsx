import './App.css'
import { Card, CardSize } from './components/Card'

function App() {

  return (
    <div className="App">
      <Card size={CardSize.SMALL} elevation={2}>
        <div>Hello</div>
      </Card>
      <Card size={CardSize.SMALL} elevation={2}>
        <div>Hello</div>
      </Card>
      <Card size={CardSize.SMALL} elevation={2}>
        <div>Hello</div>
      </Card>
      <Card size={CardSize.SMALL} elevation={2}>
        <div>Hello</div>
      </Card>
    </div>
  )
}

export default App
