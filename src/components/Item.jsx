import { Link } from 'react-router-dom';

export default function Item({ producto }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '15px', padding: '20px', textAlign: 'center', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '220px', objectFit: 'contain', marginBottom: '15px' }} />
      <h3 style={{ fontSize: '18px', color: '#222', minHeight: '54px' }}>{producto.nombre}</h3>
      <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#823b9e', margin: '15px 0' }}>
        ${producto.precio.toLocaleString('es-AR')}
      </p>
      <Link to={`/producto/${producto.id}`} style={{ display: 'inline-block', backgroundColor: '#381154', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold' }}>
        Ver Detalle
      </Link>
    </div>
  );
}