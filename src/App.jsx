import './App.css'
import {Routes, Route} from 'react-router-dom'

import {Home } from './pages/Home.jsx'
import { CreateRemindly } from './pages/CreateRemindly.jsx'
import {About} from './pages/About.jsx'
function App() {
  return (
    <Routes>

    <Route path= "/" element= {<Home/>} />
    <Route path= "/create" element = {<CreateRemindly/>} />
    <Route path= "/about" element = {<About/>} />
    </Routes>
  )
}

export default App
