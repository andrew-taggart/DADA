import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

//Importing context
import GoalContextProvide from './context/GoalContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GoalContextProvide>
      <Header />
      <Main />
      {/* <Footer /> */}
      </GoalContextProvide>
    </div>
  )
}

export default App
