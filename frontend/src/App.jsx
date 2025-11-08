import React from 'react'
import { Outlet } from 'react-router-dom' // 1. Importe o Outlet
import './App.css'
// Não precisamos mais importar Login, Register ou Dashboard aqui

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App