import { useState } from 'react';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-white opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white border-opacity-30">
              <h2 className="text-4xl font-bold text-red-900 mb-4 animate-bounce">
                ¡Oops! Página no encontrada
              </h2>
              <p className="text-xl text-gray-900 mb-8 opacity-90">
                La página que buscas estará en línea en algunas horas.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full animate-ping delay-100"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
