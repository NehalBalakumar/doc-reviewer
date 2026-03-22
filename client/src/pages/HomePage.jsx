import { Link } from 'react-router-dom'

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#0077B5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#6c47ff">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

function HomePage() {
  return (
    <div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">
          <span className="badge-dot" />
          AI-powered · Free to use · No account needed
        </div>

        <h1 className="hero-title">
          Understand every<br />
          contract <span className="grad">before you sign.</span>
        </h1>

        <p className="hero-sub">
          Upload any PDF — NDA, employment contract, or service agreement.
          Our AI reads every clause and flags the risks in plain English.
        </p>

        <div className="hero-btns">
          <Link to="/upload">
            <button className="btn-primary">Upload a document</button>
          </Link>
          <button className="btn-secondary">See how it works</button>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '2.4s', label: 'Average scan time', color: '#6c47ff' },
            { num: '12+', label: 'Risk categories detected', color: '#00b894' },
            { num: '100%', label: 'Private and secure', color: '#e17055' },
          ].map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num" style={{ color: s.color }}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="section">
        <p className="section-tag">How it works</p>
        <h2 className="section-title">Four steps. Zero confusion.</h2>

        <div className="steps">
          {[
            { num: '01', title: 'Upload your document', desc: 'Drag and drop any PDF — contracts, NDAs, agreements. We handle the rest.', bg: '#f0eeff' },
            { num: '02', title: 'AI reads every clause', desc: 'Our AI scans every sentence and condition in your document within seconds.', bg: '#e8faf5' },
            { num: '03', title: 'Risks get highlighted', desc: 'Every risky clause is flagged with a clear, jargon-free explanation.', bg: '#fff4f0' },
            { num: '04', title: 'Sign with full confidence', desc: 'You now know exactly what you are agreeing to. No surprises.', bg: '#f0f7ff' },
          ].map((s, i) => (
            <div className="step-item" key={i}>
              <div className="step-num" style={{ background: s.bg }}>{s.num}</div>
              <div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMING SOON */}
      <div className="surface-section">
        <div className="section">
          <p className="section-tag">Coming soon</p>
          <h2 className="section-title">What we are building next.</h2>

          <div className="feature-grid">
            {[
              { icon: '👤', title: 'User profiles', desc: 'Save your documents and track your full review history from a personal dashboard.', bg: '#f0eeff' },
              { icon: '⚡', title: 'Premium plan', desc: 'Unlimited uploads, priority AI, and advanced risk scoring for power users.', bg: '#fff8e6' },
              { icon: '📧', title: 'Email reports', desc: 'Get a full risk report delivered to your inbox after every document review.', bg: '#e8faf5' },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon" style={{ background: f.bg }}>{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta-card">
          <h2 className="cta-title">Ready to review<br />your document?</h2>
          <p className="cta-sub">Free to use. No account needed. Results in seconds.</p>
          <Link to="/upload">
            <button className="btn-cta">Get started for free</button>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <div className="footer-logo">clause<span>catch</span></div>
          <div className="footer-meta">© 2026 ClauseCatch. All rights reserved.</div>
          <div className="footer-meta">Chennai, Tamil Nadu, India</div>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <div className="footer-contact">📧 nehal@clausecatch.com</div>
          <div className="footer-contact">📞 +91 98765 43210</div>
        </div>

        <div>
          <div className="footer-col-title">Follow</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              onMouseEnter={e => e.currentTarget.style.color = '#E1306C'}
              onMouseLeave={e => e.currentTarget.style.color = ''}
            >
              <InstagramIcon /> Instagram
            </a>
            
              href="https://linkedin.com/in/nehalbalakumar"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              onMouseEnter={e => e.currentTarget.style.color = '#0077B5'}
              onMouseLeave={e => e.currentTarget.style.color = ''}
            >
              <LinkedInIcon /> LinkedIn
            </a>
            
              href="https://github.com/NehalBalakumar"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              onMouseEnter={e => e.currentTarget.style.color = '#6c47ff'}
              onMouseLeave={e => e.currentTarget.style.color = ''}
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default HomePage