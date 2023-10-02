import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignOut' element={<SignOut/>} />
        <Route path='/Profile'  element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
