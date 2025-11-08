import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx' 

// 1. Crie o roteador com as definições de rota
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App é o elemento "pai" (layout)
    children: [
      {
        path: '/', // A rota raiz agora renderiza o Dashboard
        element: <Dashboard />,
      },
      {
        path: '/login', // A rota /login
        element: <Login />,
      },
      {
        path: '/register', // A rota /register
        element: <Register />,
      },
    ],
  },
])

// 2. Use o <RouterProvider> em vez de <App />
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)