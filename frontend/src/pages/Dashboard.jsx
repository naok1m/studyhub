// frontend/src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react'; // 1. Importe useState e useEffect
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import { api } from '../services/api'; // 2. Importe a API
import { useNavigate } from 'react-router-dom'; // 3. Para lidar com erros

function Dashboard() {
  
  // 4. Crie um estado para guardar os dados do usuário
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 5. Use useEffect para buscar os dados quando o componente montar
  useEffect(() => {
    const fetchUserData = async () => {
      // Pega o token salvo no login
      const token = localStorage.getItem("authToken");

      if (!token) {
        // Se não tem token, manda para a página de login
        navigate("/login");
        return;
      }

      try {
        // Faz a chamada para a nova rota /users/me
        // Precisamos enviar o token no cabeçalho (Header)
        const response = await api.get("/users/me", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        // 6. Salva os dados do usuário no estado
        setUserData(response.data); 

      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
        // Se o token for inválido (expirado, etc.), também manda para o login
        localStorage.removeItem("authToken"); // Limpa o token inválido
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]); // O 'navigate' é uma dependência

  // 7. Enquanto carrega, mostre um "Loading..."
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Carregando...</div>;
  }

  // 8. Se deu erro ou não achou usuário (userData ainda é null)
  if (!userData) {
     // Isso não deve acontecer se o loading=false, mas é uma segurança
     return <div className="flex h-screen items-center justify-center">Erro ao carregar dados.</div>;
  }

  // 9. Se deu tudo certo, renderize o Dashboard com os dados reais
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar userName={userData.name} /> 

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 md:p-8">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}

export default Dashboard;