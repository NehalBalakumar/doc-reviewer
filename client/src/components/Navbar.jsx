import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Navbar({ dark, setDark }) {

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [dark])

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        clause<span>catch</span>
      </Link>

      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>

        <button
          className="dark-toggle"
          onClick={() => setDark(!dark)}
        >
          {dark ? '☀️' : '🌙'}
        </button>

        <Link to="/upload">
          <button className="nav-cta">Upload doc</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar