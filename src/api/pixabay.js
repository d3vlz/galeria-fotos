const KEY = import.meta.env.VITE_PIXABAY_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export async function searchPhotos(term = 'mountain', page = 1, per = 24) {
  const res = await fetch(`${BASE_URL}?key=${KEY}&q=${encodeURIComponent(term)}&image_type=photo&per_page=${per}&page=${page}`);
  if (!res.ok) throw new Error('Error al buscar imágenes');
  const data = await res.json();
  return data.hits; // Array de fotos
}
