import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito'; // <-- Acá importamos el Carrito nuevo

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          {/* RUTA INICIO */}
          <Route index element={
            <div className="hero-container">
              <h1 className="hero-title">¡Atrapalos a todos en PokeMarket!</h1>
              <p className="hero-subtitle">La mejor tienda de cartas sueltas y cajas selladas de Argentina.</p>
              
              <div className="hero-image-container" style={{ height: 'auto', margin: '40px 0' }}>
                <img src="/medio.png" alt="PokeMarket Banner" style={{ width: '100%', maxWidth: '750px', objectFit: 'contain' }} />
              </div>

              <div className="hero-buttons">
                <Link to="/productos" className="btn-solid">Explorar Catálogo de Cartas</Link>
                <Link to="/productos" className="btn-outline">Ver Cajas Selladas</Link>
              </div>

              <div className="shipping-banner">
                Envíos a toda la Argentina
              </div>
            </div>
          } />
          
          {/* OTRAS RUTAS */}
          <Route path="productos" element={<ItemListContainer />} />
          <Route path="producto/:id" element={<DetalleProducto />} />
          
          {/* RUTA CARRITO ACTUALIZADA */}
          <Route path="carrito" element={<Carrito />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;