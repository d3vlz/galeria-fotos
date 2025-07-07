import { useState } from 'react';
import { Gallery } from './components/Gallery';

function App() {
  const [term, setTerm] = useState('mountain');

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center my-4">Galería de Fotos</h1>

      <div className="flex justify-center gap-2 mb-4">
        {['mountain', 'beach', 'birds', 'food'].map(cat => (
          <button
            key={cat}
            onClick={() => setTerm(cat)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {cat}
          </button>
        ))}
      </div>

      <Gallery searchTerm={term} />
    </div>
  );
}

export default App;
