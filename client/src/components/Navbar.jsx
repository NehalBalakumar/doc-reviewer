import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #eee',
      padding: '0 40px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/">
        <span style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '-0.3px' }}>
          clause<span style={{ color: '#6c47ff' }}>catch</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Link to="/" style={{ fontSize: '14px', color: '#666' }}>Home</Link>
        <Link to="/upload">
          <button style={{
            background: '#111',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 18px',
            fontSize: '13px',
            fontWeight: '600'
          }}>
            Upload doc
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar