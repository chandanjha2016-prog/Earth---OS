
export default function Home() {
  return (
    <div style={{background: 'linear-gradient(180deg, #2196F3 0%, #1976D2 50%, #0D47A1 100%)', color: '#FFF', minHeight: '100vh', textAlign: 'center', padding: '60px 20px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '60px'}}>EARTH OS 🌍</h1>
      <p style={{fontSize: '22px', fontWeight: 'bold'}}>Home Base OS for Planetary Command</p>
      <div style={{background: 'rgba(255,255,255,0.15)', padding: '20px', margin: '40px auto', borderRadius: '15px', maxWidth: '600px'}}>
        <h2>Life Support: OPTIMAL ✅</h2>
        <p>Oxygen: 21% | Water: 71% | Temp: 15°C</p>
      </div>
      <a href="/dashboard" style={{background: '#FFF', color: '#0D47A1', padding: '15px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold'}}>Enter Command Center</a>
    </div>
  )
}
