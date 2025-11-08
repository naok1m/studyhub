import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Componente para os ícones (SVG simples)
const Icon = ({ path, className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
)

// Componente para os links da navegação
function NavLink({ to, iconPath, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseClasses = "flex items-center px-4 py-2.5 rounded-lg transition-colors duration-200"
  const activeClasses = "bg-blue-600 text-white"
  const inactiveClasses = "text-gray-600 hover:bg-gray-200"

  return (
    <li>
      <Link
        to={to}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <Icon path={iconPath} />
        <span className="ml-3 font-medium">{label}</span>
      </Link>
    </li>
  )
}

function Sidebar({ userName }) {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-6 bg-white border-r overflow-y-auto">
      
      {/* 1. Logo e Perfil (Simplificado) */}
      <div className="mb-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-block p-2 bg-blue-500 rounded-lg"> {/* */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6"> {/* */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41A60.436 60.436 0 0012 10.147M12 10.147c0 0 0-1.574.008-3.302m0 0c0 0 0 1.573.008 3.302" /> {/* */}
            </svg>
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-800">StudyHub</span> {/* */}
        </div>
        
        {/* Perfil do Usuário */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-semibold">
            {userName.charAt(0).toUpperCase()} {/* Avatar placeholder */}
          </div>
          <div className="ml-3">
            <span className="block text-sm font-semibold text-gray-800">{userName}</span>
            {/* Pontos removidos, conforme solicitado */}
          </div>
        </div>
      </div>

      {/* 2. Navegação Principal */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <NavLink 
            to="/" 
            iconPath="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3m-16.5 0h16.5m-16.5 0A2.25 2.25 0 001.5 5.25v1.5A2.25 2.25 0 003.75 9v1.5A2.25 2.25 0 006 12.75v1.5A2.25 2.25 0 008.25 16.5h7.5A2.25 2.25 0 0018 14.25v-1.5A2.25 2.25 0 0015.75 9V7.5A2.25 2.25 0 0013.5 5.25v-1.5A2.25 2.25 0 0011.25 1.5h-7.5A2.25 2.25 0 001.5 5.25v1.5A2.25 2.25 0 003.75 9v1.5" 
            label="Dashboard" 
          />
          <NavLink 
            to="/tarefas" // Você precisará criar esta rota em main.jsx depois
            iconPath="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5h.75v.75H6.75V7.5zM6.75 10.5h.75v.75H6.75V10.5zM6.75 13.5h.75v.75H6.75V13.5zM6.75 16.5h.75v.75H6.75V16.5zM4.5 6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 011.123-.08M4.5 6.108V18a2.25 2.25 0 002.25 2.25h1.5v-9.75M4.5 6.108l-.622-.622a2.25 2.25 0 010-3.182l.622-.622a2.25 2.25 0 013.182 0l.622.622M4.5 6.108l-3.319 3.319a2.25 2.25 0 000 3.182l3.319 3.319" 
            label="Tarefas" 
          />
          <NavLink 
            to="/foco" // Você precisará criar esta rota em main.jsx depois
            iconPath="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
            label="Sessão de Foco" 
          />
          {/* IA Questões REMOVIDO */}
          <NavLink 
            to="/comunidade" // etc...
            iconPath="M18 18.72a9.094 9.094 0 00-3.17-2.036m-2.634 0a9.094 9.094 0 00-3.17 2.036m6.34 0H12m6.34 0a9.094 9.094 0 01-3.17-2.036M6.34 18.72A9.094 9.094 0 013.17 16.684m3.17 0a9.094 9.094 0 01-3.17-2.036m3.17 0H12m-6.34 0a9.094 9.094 0 00-3.17 2.036M12 12a3 3 0 100-6 3 3 0 000 6z" 
            label="Comunidade" 
          />
          <NavLink 
            to="/estatisticas" // etc...
            iconPath="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3.75M3.75 3v-1.5A2.25 2.25 0 016 0h12A2.25 2.25 0 0120.25 1.5V3M3.75 3h16.5M3.75 16.5v1.5A2.25 2.25 0 006 20.25h12a2.25 2.25 0 002.25-2.25v-1.5M16.5 12h.008v.008H16.5V12zM12 12h.008v.008H12V12zM7.5 12h.008v.008H7.5V12z" 
            label="Estatísticas" 
          />
          <NavLink 
            to="/perfil" // etc...
            iconPath="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" 
            label="Perfil" 
          />
        </ul>
      </nav>

      {/* 3. Rodapé da Sidebar */}
      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-600">Tema</span>
          {/* Botão de Tema (Switch) */}
          <button className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200">
            <span className="inline-block w-4 h-4 transform bg-white rounded-full transition-transform" />
          </button>
        </div>
        
        {/* Notificações */}
        <Link to="#" className="flex items-center px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-200">
          <Icon path="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          <span className="ml-3 font-medium">Notificações</span>
          <span className="inline-flex items-center justify-center w-5 h-5 ml-auto text-xs font-semibold text-white bg-red-500 rounded-full">
            2
          </span>
        </Link>
        
        {/* Sair */}
        <Link to="/login" className="flex items-center px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-200">
          <Icon path="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          <span className="ml-3 font-medium">Sair</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar