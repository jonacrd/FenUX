export default function AppsWebHero() {
  return (
    <div style={{
      height: '100vh',
      background: '#0a0a0a',
      color: 'white',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '0px',
      paddingTop: '70px'
    }}>
      {/* Main Content */}
      <main style={{
        height: '100%',
        width: '100%',
        padding: '0',
        margin: '0',
        display: 'flex',
        alignItems: 'center'
      }}>
        <section style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            height: '100%',
            width: '100%',
            padding: '0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
              padding: '2rem',
              height: '100%',
              width: '100%'
            }}>
              {/* Left Content */}
              <div style={{
                flex: '1',
                maxWidth: '50%',
                padding: '2rem',
                zIndex: 10
              }}>
                {/* Announcement Badge */}
                <a href="/" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '0.875rem',
                  marginBottom: '2rem',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>New</span>
                  <span>Introduction Tailark Html</span>
                  <span style={{
                    width: '1px',
                    height: '16px',
                    background: 'rgba(255, 255, 255, 0.3)'
                  }}></span>
                  <span>→</span>
                </a>

                {/* Main Title */}
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}>
                  Apps Web que Facturan
                </h1>

                {/* Description */}
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: '#a1a1aa',
                  marginBottom: '2rem',
                  lineHeight: '1.6',
                  maxWidth: '500px'
                }}>
                  Desarrollamos aplicaciones web modernas, escalables y optimizadas. Desde MVP hasta aplicaciones empresariales complejas con Stripe integrado.
                </p>

                {/* Email Form */}
                <div style={{
                  marginBottom: '2rem'
                }}>
                  <form style={{
                    maxWidth: '400px',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      position: 'relative',
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '0.25rem',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: '1.25rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#a1a1aa',
                        fontSize: '1.25rem'
                      }}>✉</div>
                      <input
                        type="email"
                        placeholder="Your mail address"
                        style={{
                          background: 'transparent',
                          border: 'none',
                          padding: '1rem 1rem 1rem 3rem',
                          color: 'white',
                          fontSize: '1rem',
                          outline: 'none',
                          width: '100%'
                        }}
                      />
                      <button type="submit" style={{
                        background: 'white',
                        color: 'black',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span>Get Started</span>
                        <span>→</span>
                      </button>
                    </div>
                  </form>

                  {/* Feature List */}
                  <ul style={{
                    listStyle: 'disc',
                    paddingLeft: '1.5rem',
                    color: '#a1a1aa',
                    fontSize: '0.875rem'
                  }}>
                    <li style={{ marginBottom: '0.5rem' }}>Faster</li>
                    <li style={{ marginBottom: '0.5rem' }}>Modern</li>
                    <li style={{ marginBottom: '0.5rem' }}>100% Customizable</li>
                  </ul>
                </div>
              </div>

              {/* Right Gallery */}
              <div style={{
                flex: '1',
                position: 'relative',
                height: '100%',
                width: '50%'
              }}>
                <div style={{
                  position: 'relative',
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, transparent 35%)',
                  borderRadius: '24px',
                  padding: '0.75rem',
                  height: '100%',
                  width: '100%'
                }}>
                  {/* Add Music Button */}
                  <button style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{ fontSize: '1rem' }}>+</span>
                    Add music
                  </button>

                  {/* Image Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: '0.5rem',
                    height: '100%',
                    width: '100%'
                  }}>
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <div key={index} style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: 'linear-gradient(45deg, #00E5FF, #7C4DFF)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                      }}>
                        App {index}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
