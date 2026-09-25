import { Link } from 'react-router-dom';

export default function Carrito() {
  return (
    <div className="carrito-container">
      <h2 className="carrito-titulo">Carrito de compras</h2>
      
      <div className="carrito-contenido">
        <div className="carrito-vacio">
          <img src="/pikachu-carrito.png" alt="Carrito vacío" className="pikachu-img" />
          <h3>¡Vaya! Parece que tu carrito está vacío.</h3>
          <p>Añade algunos artículos increíbles de nuestro catálogo.</p>
          <Link to="/productos" className="btn-explorar">Explorar el Catálogo 🔍</Link>
        </div>

        <div className="carrito-resumen">
          <h3>Resumen de Compra</h3>
          <div className="resumen-item">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="resumen-item">
            <span>Envío</span>
            <span>—</span>
          </div>
          <hr />
          <div className="resumen-total">
            <span>Total</span>
            <span>$0.00</span>
          </div>
          <button className="btn-pagar" disabled>Proceder al Pago</button>
        </div>
      </div>
    </div>
  );
}