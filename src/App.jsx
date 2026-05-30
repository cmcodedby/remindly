import './App.css'
import {Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import { CreateRemindly } from './pages/CreateRemindly.jsx'
import { About } from './pages/About.jsx'
import { Login } from './pages/Login.jsx'
import { Track } from './pages/Track.jsx'
function App() {
  return (
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "/create" element = {<CreateRemindly/>} />
      <Route path= "/about" element = {<About/>} />
      <Route path= "/track" element = {<Track/>} />
      {/* <Route path= "/" element = {<Login/>} /> */}
    </Routes>
  )
}

export default App
