/* eslint-disable no-unused-vars */
import React, { useState } from "react"; // 1. Importe o useState
import { Link, useNavigate } from "react-router-dom"; // 2. Importe Link e useNavigate
import Button from "../components/Button";
import { api } from "../services/api"; // 3. Importe a API

function Register() {
  // 4. Crie estados para os campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Para mensagem de sucesso
  const navigate = useNavigate(); // 5. Para redirecionar

  // 6. Crie a função de registro
  const handleRegister = async (e) => {
    e.preventDefault(); // Impede o recarregamento
    setError("");
    setSuccess("");

    // 7. Validação
    if (!name || !email || !password || !passwordConfirm) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

   
      setSuccess("Usuário criado com sucesso! Redirecionando para o login...");
      
  
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      // 11. Trate os erros
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Erro ao registrar usuário. Tente novamente.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-linear-to-br from-teal-50 to-[#F0FBF8]">
      {/* ... (Logo e Título) ... */}
      
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Criar conta
        </h2>

        <form className="space-y-6" onSubmit={handleRegister}>
          
   
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo
            </label>
            <div className="relative mt-1">
      
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name} // 13. Conecte os inputs aos estados
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Seu nome completo"
                    className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
          </div>
          
          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <div className="relative mt-1">
              {/* ... (ícone) ... */}
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seu@email.com"
                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Campo de Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="relative mt-1">
              {/* ... (ícone) ... */}
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Sua senha"
                className="block w-full py-2 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
                
            </div>
          </div>
          
          <div>
            <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
            <div className="relative mt-1">
                    
              <input 
                id="password-confirm" 
                name="password-confirm" 
                type="password" 
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required 
                placeholder="Confirme sua senha" 
                className="block w-full py-2 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-center text-red-600">{error}</p>
          )}
          {success && (
            <p className="text-sm text-center text-green-600">{success}</p>
          )}

          <div>
            <Button type="submit" className="w-full">
                Criar Conta
            </Button>
          </div>
        </form>

        {/* Link para Login */}
        <p className="text-sm text-center text-gray-600 ">
          Já tem uma conta?
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 p-2">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;