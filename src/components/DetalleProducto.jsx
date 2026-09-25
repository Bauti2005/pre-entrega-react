import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const prodEncontrado = datos.find((p) => p.id === parseInt(id));
        setProducto(prodEncontrado);
      });
  }, [id]);

  if (!producto) return <p>Cargando detalle...</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '30px', backgroundColor: 'white' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', objectFit: 'contain', borderRadius: '10px' }} />
      <div>
        <h2>{producto.nombre}</h2>
        <p style={{ textTransform: 'capitalize', color: 'gray' }}>{producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <h3 style={{ color: '#6C318C', fontSize: '28px' }}>${producto.precio}</h3>
        <Link to="/productos" style={{ display: 'inline-block', marginTop: '20px', color: '#6C318C', fontWeight: 'bold', textDecoration: 'none' }}>
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}