import { useState, useContext } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import './index.css'

//Importing context
import GoalContextProvide from './context/GoalContext'
import AuthContext from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AuthContext>
        <GoalContextProvide>
          <Header />
          <Main />
          <Footer />
        </GoalContextProvide>
      </AuthContext>
    </div>
  )
}

export default App
