
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import { api } from '../services/api'; 
import { useNavigate } from 'react-router-dom'; 

function Dashboard() {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUserData = async () => {
  
      const token = localStorage.getItem("authToken");

      if (!token) {
     
        navigate("/login");
        return;
      }

      try {
        const response = await api.get("/users/me", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        // 6. Salva os dados do usuário no estado
        setUserData(response.data); 

      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
    
        localStorage.removeItem("authToken"); 
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Carregando...</div>;
  }

  if (!userData) {
 
     return <div className="flex h-screen items-center justify-center">Erro ao carregar dados.</div>;
  }

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