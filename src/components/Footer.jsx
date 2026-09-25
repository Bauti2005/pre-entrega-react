export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#381154', color: 'white', padding: '40px 20px', marginTop: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', gap: '20px' }}>
        
        {/* Info de la Empresa */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ borderBottom: '2px solid #823b9e', paddingBottom: '10px' }}>PokeMarket</h3>
          <p>📍 Sucursal Central: Buenos Aires, Argentina</p>
          <p>✉️ Contacto: info@pokemarket.com.ar</p>
          <p>🔒 Políticas de Privacidad y Términos de Uso</p>
          <p>© 2026 PokeMarket. Propiedad Intelectual Registrada.</p>
        </div>

        {/* Newsletter */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ borderBottom: '2px solid #823b9e', paddingBottom: '10px' }}>Newsletter</h3>
          <p>Suscribite para enterarte de los últimos restocks.</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <input type="email" placeholder="Tu email..." style={{ padding: '10px', borderRadius: '5px', border: 'none', width: '100%' }} />
            <button style={{ padding: '10px 15px', borderRadius: '5px', border: 'none', backgroundColor: '#823b9e', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Suscribirme</button>
          </div>
        </div>
      </div>

      <hr style={{ borderColor: '#823b9e', margin: '40px 0 20px 0' }} />

      {/* Tarjetas del Equipo */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '30px' }}>Nuestro Equipo</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
          <div style={{ backgroundColor: 'white', color: '#222', padding: '20px', borderRadius: '15px', width: '200px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '50px', marginBottom: '10px' }}>👨‍💻</div>
            <h4 style={{ margin: '0 0 5px 0' }}>Bautista</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', fontWeight: 'bold' }}>Desarrollador / CEO</p>
          </div>

          <div style={{ backgroundColor: 'white', color: '#222', padding: '20px', borderRadius: '15px', width: '200px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '50px', marginBottom: '10px' }}>👨‍💼</div>
            <h4 style={{ margin: '0 0 5px 0' }}>Joaco</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', fontWeight: 'bold' }}>Jefe de Ventas</p>
          </div>

          <div style={{ backgroundColor: 'white', color: '#222', padding: '20px', borderRadius: '15px', width: '200px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '50px', marginBottom: '10px' }}>📦</div>
            <h4 style={{ margin: '0 0 5px 0' }}>Chacha</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', fontWeight: 'bold' }}>Logística y Envíos</p>
          </div>

        </div>
      </div>
    </footer>
  );
}