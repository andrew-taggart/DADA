import { useState,useContext } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

//Importing context
import GoalContext from './context/GoalContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GoalContext>
      <Header />
      <Main />
      {/* <Footer /> */}
      </GoalContext>
    </div>
  )
}

export default App
