import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-800 px-4">
    <h1 className="text-4xl font-bold mb-4 text-green-900">Quota</h1>

    <p className="max-w-xl text-center text-lg text-gray-700 mb-8">
      Simplificá la gestión y los pagos de tus suscripciones compartidas con amigos y familiares.  
      Crea, divide y automatiza recordatorios para que nadie se olvide de pagar su parte.
    </p>

    <div className="flex gap-6">
      <button
        onClick={() => {/* redirigir a registro */}}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Registrate
      </button>

      <button
        onClick={() => {/* redirigir a login */}}
        className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition"
      >
        Iniciar sesión
      </button>
    </div>
  </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
