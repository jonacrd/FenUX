export default function SimpleLandingHero() {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #0b0d10 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '0px',
      paddingTop: '70px'
    }}>
      {/* Main Gallery */}
      <div style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '0.5rem',
          height: '100%',
          width: '100%',
          maxWidth: '1200px'
        }}>
          {/* Main large image */}
          <div style={{
            gridRow: '1 / 3',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            background: 'linear-gradient(45deg, #00E5FF, #7C4DFF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            LANDING PAGES
          </div>

          {/* Right column images */}
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            background: 'linear-gradient(45deg, #7C4DFF, #00E5FF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            PORTFOLIO
          </div>

          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            background: 'linear-gradient(45deg, #00E5FF, #7C4DFF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            DESIGN
          </div>
        </div>

        {/* Floating Content Overlay */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10,
          maxWidth: '600px',
          padding: '2rem',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '20px',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #00E5FF, #7C4DFF)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            textShadow: '0 0 30px rgba(0, 229, 255, 0.3)'
          }}>
            Landing Pages que Convierten
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#e5e7eb',
            marginBottom: '2.5rem',
            opacity: '0.9',
            lineHeight: '1.6',
            maxWidth: '500px',
            margin: '0 auto 2.5rem auto'
          }}>
            Diseñamos landing pages y portfolios profesionales que capturan la atención de tus clientes y generan más conversiones.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '1rem 2rem',
              borderRadius: '15px',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: 'none',
              background: 'linear-gradient(135deg, #00E5FF, #7C4DFF)',
              color: '#051018',
              boxShadow: '0 10px 30px rgba(0, 229, 255, 0.4)',
              transform: 'translateY(0)',
              minWidth: '180px'
            }}>
              Pedir Propuesta
            </button>
            <button style={{
              padding: '1rem 2rem',
              borderRadius: '15px',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              background: 'transparent',
              color: 'white',
              transform: 'translateY(0)',
              minWidth: '180px'
            }}>
              Ver Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
