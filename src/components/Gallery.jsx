import { useEffect, useState } from 'react';
import { searchPhotos } from '../api/pixabay';

export function Gallery({ searchTerm }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchPhotos(searchTerm)
      .then(setImages)
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return (
    <div className="p-4">
      {loading && <p className="text-center">Cargando imágenes...</p>}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map(img => (
          <img
            key={img.id}
            src={img.webformatURL}
            alt={img.tags}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}
