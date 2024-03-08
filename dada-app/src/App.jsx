import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="AppContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
