import React from 'react';

function Button({ children, className, type = 'button', ...props }) {
  
  // 1. Estilos base do seu botão
  const baseStyles = `
    flex justify-center 
    px-4 py-2 
    text-sm font-medium text-white 
    bg-blue-600 border border-transparent rounded-md shadow-sm 
    hover:bg-blue-700 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <button
      type={type} // Define o tipo (submit, button, reset)
      className={combinedClassName}
      {...props} // Passa todas as outras props (ex: onClick, disabled)
    >
      {children}
    </button>
  );
}

export default Button;