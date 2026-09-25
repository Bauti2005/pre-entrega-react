import { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(error => console.error("Error al cargar los productos:", error));
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#381154', marginBottom: '30px' }}>Nuestro Catálogo</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
        {productos.map(producto => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}