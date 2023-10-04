import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Header from './components/Header'
function App() {
 // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Profile'  element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
