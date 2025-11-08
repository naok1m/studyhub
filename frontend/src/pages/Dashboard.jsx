import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardContent from '../components/DashboardContent'

function Dashboard() {
  
  // No futuro, você vai pegar esses dados do usuário logado
  const userData = {
    name: "speed da peste", 
    // email: "speed@email.com" 
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 1. Barra Lateral Fixa */}
      <Sidebar userName={userData.name} />

      {/* 2. Área de Conteúdo Principal (com scroll) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 md:p-8">
          {/* O conteúdo da página (Tarefas, Perfil, etc.) será renderizado aqui */}
          {/* Por enquanto, vamos renderizar um conteúdo de dashboard simples */}
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}

export default Dashboard