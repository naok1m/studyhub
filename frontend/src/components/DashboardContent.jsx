import React from 'react'
import Button from '../components/Button' // Reutilizando seu botão

// Um cartão de estatística simples
const StatCard = ({ title, value, iconPath }) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
    <div className="p-3 bg-blue-100 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
    </div>
    <div className="ml-4">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
)

function DashboardContent() {
  return (
    <div>
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Bem-vindo de volta! Aqui está seu resumo.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="w-full md:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 -ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Nova Tarefa
          </Button>
        </div>
      </div>

      {/* Grid de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Tarefas Pendentes" 
          value="0" 
          iconPath="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08" 
        />
        <StatCard 
          title="Tarefas Concluídas" 
          value="0" 
          iconPath="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
        <StatCard 
          title="Sessões de Foco (Hoje)" 
          value="0" 
          iconPath="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </div>

      {/* Próximas Tarefas (Vazio) */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center">
        <div className="inline-block p-4 bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5h.75v.75H6.75V7.5zM6.75 10.5h.75v.75H6.75V10.5zM6.75 13.5h.75v.75H6.75V13.5zM6.75 16.5h.75v.75H6.75V16.5zM4.5 6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 011.123-.08M4.5 6.108V18a2.25 2.25 0 002.25 2.25h1.5v-9.75M4.5 6.108l-.622-.622a2.25 2.25 0 010-3.182l.622-.622a2.25 2.25 0 013.182 0l.622.622m0 0l3.319 3.319a2.25 2.25 0 000 3.182l-3.319 3.319" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Nenhuma tarefa para hoje</h3>
        <p className="mt-2 text-gray-500">Que tal adicionar uma nova tarefa e começar a organizar seus estudos?</p>
        <Button className="mt-6 flex    items-center justify-center mx-auto">
          Criar Primeira Tarefa
        </Button>
      </div>

    </div>
  )
}

export default DashboardContent