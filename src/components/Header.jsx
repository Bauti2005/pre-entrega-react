import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', backgroundColor: '#381154', color: 'white', alignItems: 'center' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
        <img src="/tu-nueva-master-ball.png" alt="Logo" style={{ width: '35px' }} />
        <h2 style={{ margin: 0, fontSize: '24px' }}>PokeMarket</h2>
      </Link>
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/productos" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Catálogo</Link>
        <Link to="/carrito" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Carrito</Link>
      </nav>
    </header>
  );
}