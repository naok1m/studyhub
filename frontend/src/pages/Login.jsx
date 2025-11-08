import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-linear-to-br from-teal-50 to-[#F0FBF8]">

      <div className="mb-8 text-center">
        <div className="inline-block p-3 mb-2 bg-blue-500 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41A60.436 60.436 0 0012 10.147M12 10.147c0 0 0-1.574.008-3.302M12 10.147c0 0 0 1.574-.008 3.302m0 0c0 0 0 1.573.008 3.302M12 10.147c0 0 0-1.573-.008-3.302m0 0c0 0 0-1.574.008-3.302M12 10.147c0 0 0 1.574-.008 3.302m0 0c0 0 0 1.573.008 3.302M12 10.147c0 0 0-1.573-.008-3.302m0 0c0 0 0-1.574.008-3.302M12 10.147c0 0 0 1.574-.008 3.302m0 0c0 0 0 1.573.008 3.302M12 10.147c0 0 0-1.573-.008-3.302m0 0c0 0 0-1.574.008-3.302M12 10.147c0 0 0 1.574-.008 3.302m0 0c0 0 0 1.573.008 3.302M12 10.147c0 0 0-1.573-.008-3.302" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">StudyHub</h1>
        <p className="text-gray-600">Sua plataforma de estudos completa</p>
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Entrar
        </h2>

  
        <form className="space-y-6" action="#" method="POST">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
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
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Sua senha"
                className="block w-full py-2 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Botão de Entrar */}
          <div>
            <Button className="w-full">
                Entrar
            </Button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600 ">
          Não tem uma conta?
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 p-2">
            Cadastre-se
          </Link>
        </p>

        {/* Bloco de Informação "Demo" */}
        <div className="p-4 text-sm text-gray-700 bg-gray-100 rounded-md">
          <strong>Demo:</strong> Use qualquer email/senha para testar
          <span className="block mt-1 text-xs font-mono text-gray-600">
            Ex: demo@studyhub.com / 123456
          </span>
        </div>

      </div>
    </div>
  );
}

export default Login;