import { Link } from 'react-router-dom'
import { useState } from 'react'

function HomePage() {
  const [hoveredStep, setHoveredStep] = useState(null)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  return (
    <div style={{ background: '#f8f7ff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* HERO */}
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '110px 40px 90px',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#fff',
          border: '1px solid #e8e3ff',
          borderRadius: '100px',
          padding: '6px 16px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#6c47ff',
          marginBottom: '32px',
          boxShadow: '0 2px 12px rgba(108,71,255,0.08)',
          cursor: 'default'
        }}>
          <span style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: '#6c47ff',
            display: 'inline-block'
          }}/>
          AI-powered · Free to use · No account needed
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 58px)',
          fontWeight: '900',
          lineHeight: '1.08',
          letterSpacing: '-2px',
          marginBottom: '24px',
          color: '#0d0d0d'
        }}>
          Understand every<br />
          contract{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6c47ff, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            before you sign.
          </span>
        </h1>

        <p style={{
          fontSize: '17px',
          color: '#666',
          lineHeight: '1.8',
          maxWidth: '500px',
          marginBottom: '40px',
          fontWeight: '400'
        }}>
          Upload any PDF — NDA, employment contract, or service agreement.
          Our AI reads every clause and flags the risks in plain English.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/upload">
            <button
              style={{
                background: '#0d0d0d',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '15px 30px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                letterSpacing: '-0.3px'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)'
              }}
            >
              Upload a document →
            </button>
          </Link>
          <button
            style={{
              background: '#fff',
              color: '#0d0d0d',
              border: '1.5px solid #e5e5e5',
              borderRadius: '12px',
              padding: '15px 30px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#6c47ff'
              e.currentTarget.style.color = '#6c47ff'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(108,71,255,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e5e5e5'
              e.currentTarget.style.color = '#0d0d0d'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            See how it works
          </button>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        background: '#fff',
        borderTop: '1px solid #f0eeff',
        borderBottom: '1px solid #f0eeff',
        boxShadow: '0 4px 40px rgba(108,71,255,0.06)'
      }}>
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0'
        }}>
          {[
            { num: '2.4s', label: 'Average scan time', color: '#6c47ff' },
            { num: '12+', label: 'Risk categories detected', color: '#00b894' },
            { num: '100%', label: 'Private and secure', color: '#e17055' },
          ].map((s, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0 24px',
              borderRight: i < 2 ? '1px solid #f0eeff' : 'none'
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '900',
                color: s.color,
                letterSpacing: '-1.5px',
                marginBottom: '6px'
              }}>{s.num}</div>
              <div style={{
                fontSize: '13px',
                color: '#999',
                fontWeight: '500'
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '80px 40px'
      }}>
        <p style={{
          fontSize: '11px',
          fontWeight: '700',
          color: '#6c47ff',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '12px'
        }}>How it works</p>

        <h2 style={{
          fontSize: '32px',
          fontWeight: '800',
          letterSpacing: '-1px',
          marginBottom: '48px',
          color: '#0d0d0d'
        }}>
          Four steps. Zero confusion.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { num: '01', title: 'Upload your document', desc: 'Drag and drop any PDF — contracts, NDAs, agreements. We handle the rest.', color: '#f0eeff' },
            { num: '02', title: 'AI reads every clause', desc: 'Our AI scans every sentence and condition in your document within seconds.', color: '#e8faf5' },
            { num: '03', title: 'Risks get highlighted', desc: 'Every risky clause is flagged with a clear, jargon-free explanation.', color: '#fff4f0' },
            { num: '04', title: 'Sign with full confidence', desc: 'You now know exactly what you are agreeing to. No surprises.', color: '#f0f7ff' },
          ].map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                background: hoveredStep === i ? '#fff' : 'transparent',
                border: `1px solid ${hoveredStep === i ? '#e8e3ff' : 'transparent'}`,
                borderRadius: '16px',
                padding: '20px',
                cursor: 'default',
                transition: 'all 0.2s ease',
                boxShadow: hoveredStep === i ? '0 8px 32px rgba(108,71,255,0.08)' : 'none',
                transform: hoveredStep === i ? 'translateX(4px)' : 'translateX(0)'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: s.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '800',
                color: '#6c47ff',
                flexShrink: 0
              }}>{s.num}</div>
              <div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#0d0d0d',
                  marginBottom: '6px'
                }}>{s.title}</div>
                <div style={{
                  fontSize: '14px',
                  color: '#888',
                  lineHeight: '1.65'
                }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMING SOON */}
      <div style={{
        background: '#fff',
        borderTop: '1px solid #f0eeff',
        borderBottom: '1px solid #f0eeff'
      }}>
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '80px 40px'
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: '700',
            color: '#6c47ff',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '12px'
          }}>Coming soon</p>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '800',
            letterSpacing: '-1px',
            marginBottom: '40px',
            color: '#0d0d0d'
          }}>What we are building next.</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px'
          }}>
            {[
              { icon: '👤', title: 'User profiles', desc: 'Save your documents and track your full review history from a personal dashboard.', bg: '#f0eeff', iconBg: '#e4dcff' },
              { icon: '⚡', title: 'Premium plan', desc: 'Unlimited uploads, priority AI, and advanced risk scoring for power users.', bg: '#fff8e6', iconBg: '#ffedb3' },
              { icon: '📧', title: 'Email reports', desc: 'Get a full risk report delivered to your inbox after every document review.', bg: '#e8faf5', iconBg: '#b3f0dc' },
            ].map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  background: hoveredFeature === i ? f.bg : '#fafafa',
                  border: `1.5px solid ${hoveredFeature === i ? '#e8e3ff' : '#f0f0f0'}`,
                  borderRadius: '20px',
                  padding: '28px',
                  cursor: 'default',
                  transition: 'all 0.25s ease',
                  boxShadow: hoveredFeature === i ? '0 12px 40px rgba(108,71,255,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
                  transform: hoveredFeature === i ? 'translateY(-4px)' : 'translateY(0)'
                }}
              >
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '14px',
                  background: f.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '16px'
                }}>{f.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#0d0d0d', marginBottom: '8px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#888', lineHeight: '1.7' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '90px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '28px',
          padding: '64px 48px',
          border: '1.5px solid #f0eeff',
          boxShadow: '0 20px 60px rgba(108,71,255,0.08)'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '900',
            letterSpacing: '-1.2px',
            marginBottom: '16px',
            color: '#0d0d0d'
          }}>
            Ready to review<br />your document?
          </h2>
          <p style={{ fontSize: '15px', color: '#999', marginBottom: '32px', fontWeight: '400' }}>
            Free to use. No account needed. Results in seconds.
          </p>
          <Link to="/upload">
            <button
              style={{
                background: 'linear-gradient(135deg, #6c47ff, #9b59b6)',
                color: '#fff',
                border: 'none',
                borderRadius: '14px',
                padding: '16px 40px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 8px 32px rgba(108,71,255,0.3)',
                letterSpacing: '-0.3px'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-3px)'
                e.target.style.boxShadow = '0 16px 48px rgba(108,71,255,0.4)'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 8px 32px rgba(108,71,255,0.3)'
              }}
            >
              Get started for free →
            </button>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        borderTop: '1px solid #f0eeff',
        padding: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '32px',
        background: '#fff'
      }}>
        <div>
          <div style={{
            fontWeight: '800',
            fontSize: '16px',
            marginBottom: '8px',
            letterSpacing: '-0.5px'
          }}>
            clause<span style={{ color: '#6c47ff' }}>catch</span>
          </div>
          <div style={{ fontSize: '12px', color: '#bbb', marginBottom: '4px' }}>
            © 2026 ClauseCatch. All rights reserved.
          </div>
          <div style={{ fontSize: '12px', color: '#bbb' }}>
            Chennai, Tamil Nadu, India
          </div>
        </div>

        <div>
          <div style={{
            fontSize: '11px', fontWeight: '700', color: '#999',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'
          }}>Contact</div>
          <div style={{ fontSize: '13px', color: '#555', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            📧 nehal@clausecatch.com
          </div>
          <div style={{ fontSize: '13px', color: '#555', display: 'flex', alignItems: 'center', gap: '6px' }}>
            📞 +91 98765 43210
          </div>
        </div>

        <div>
          <div style={{
            fontSize: '11px', fontWeight: '700', color: '#999',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'
          }}>Follow</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              {
                name: 'Instagram', color: '#E1306C', href: 'https://instagram.com',
                icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              },
              {
                name: 'LinkedIn', color: '#0077B5', href: 'https://linkedin.com/in/nehalbalakumar',
                icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              },
              {
                name: 'GitHub', color: '#111', href: 'https://github.com/NehalBalakumar',
                icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="#111"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              }
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '13px', color: '#555', textDecoration: 'none',
                  transition: 'color 0.15s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = s.color}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}
              >
                {s.icon}{s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage