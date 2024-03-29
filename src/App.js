import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"

import SidebarComponent from './components/SidebarComponent'
import MainComponent from './components/MainComponent'
import PlayerComponent from './components/PlayerComponent'

function App() {
  return (
    <BrowserRouter>
    <SidebarComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
      <PlayerComponent />
    </BrowserRouter>
  )
}

export default App
