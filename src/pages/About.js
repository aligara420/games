import React from 'react';

const About = () => {
  const committeeChairs = [
    {
      name: 'Jan Eric Nordmo',
      title: 'Committee Co-Chair',
      bio: 'Leading Silicon Valley business development initiatives and international partnerships.',
      focus: 'International Relations & Business Development'
    },
    {
      name: 'Kevin Moore', 
      title: 'Committee Co-Chair',
      bio: 'Expert in community engagement and local economic development strategies.',
      focus: 'Community Engagement & Local Partnerships'
    },
    {
      name: 'Harbir K Bhatia',
      title: 'Committee Co-Chair', 
      bio: 'Specialist in event coordination and regional marketing initiatives.',
      focus: 'Event Coordination & Regional Marketing'
    }
  ];

  const keyStats = [
    { number: '2026', label: 'Two Major Global Events' },
    { number: '50M+', label: 'Expected Visitors' },
    { number: '100+', label: 'Local Businesses Involved' },
    { number: '$500M+', label: 'Projected Economic Impact' }
  ];

  return (
    <div className="fade-in">
      <section className="section">
        <h1 className="section-title">About the Games Committee</h1>
        <p className="section-subtitle">
          Turning global moments into local wins for Silicon Valley businesses and communities.
        </p>

        {/* Mission Statement */}
        <div style={{ 
          background: 'var(--hero-gradient)',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '4rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Our Mission</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              With Super Bowl LX (2026) and the FIFA World Cup bringing unprecedented global attention to the Bay Area, 
              the Games Committee exists to ensure Silicon Valley doesn't just watch the games — we host, celebrate, 
              lead, and benefit.
            </p>
            <p>
              We're the bridge between global opportunity and local success, connecting businesses, communities, 
              and visitors in ways that create lasting economic and cultural impact.
            </p>
          </div>
        </div>

        {/* Key Stats */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">By the Numbers</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {keyStats.map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '2px solid var(--light-gray)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: 'var(--primary-blue)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Leadership */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Committee Leadership</h2>
          <div className="benefits-grid">
            {committeeChairs.map((chair, index) => (
              <div key={index} className="benefit-card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--primary-blue)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  margin: '0 auto 1rem'
                }}>
                  {chair.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="benefit-title">{chair.name}</h3>
                <p style={{ 
                  color: 'var(--secondary-gold)', 
                  fontWeight: '600',
                  marginBottom: '1rem' 
                }}>
                  {chair.title}
                </p>
                <p style={{ 
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                  color: '#666'
                }}>
                  {chair.bio}
                </p>
                <div style={{
                  background: 'var(--light-gray)',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  color: 'var(--primary-blue)'
                }}>
                  Focus: {chair.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Our Approach</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                icon: '🤝',
                title: 'Collaborate',
                description: 'Bring together businesses, civic leaders, and community organizations'
              },
              {
                icon: '🎯',
                title: 'Coordinate',  
                description: 'Align events and promotions for maximum regional impact'
              },
              {
                icon: '📢',
                title: 'Promote',
                description: 'Amplify local businesses through unified marketing efforts'
              },
              {
                icon: '💰',
                title: 'Profit',
                description: 'Ensure economic benefits stay in Silicon Valley communities'
              }
            ].map((approach, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '2rem 1rem'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {approach.icon}
                </div>
                <h3 style={{ 
                  color: 'var(--primary-blue)',
                  marginBottom: '1rem',
                  fontSize: '1.5rem'
                }}>
                  {approach.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.5' }}>
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Games We're Preparing For */}
        <div style={{
          background: 'var(--light-gray)',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '4rem'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--dark-gray)' }}>
            The Games We're Preparing For
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏈</div>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                Super Bowl LX
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                February 9, 2026 • Levi's Stadium
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                The biggest single sporting event in America, bringing over 100,000 visitors 
                and global media attention to Silicon Valley.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚽</div>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                FIFA World Cup 2026
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                June 11 - July 19, 2026 • Levi's Stadium
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                The world's most watched sporting event, with matches hosted at Levi's Stadium 
                and millions of international visitors.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Join */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Be Part of Something Big?</h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join the Games Committee and help shape how Silicon Valley benefits from these historic events.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#join" className="cta-button primary">
              Join the Committee
            </a>
            <a href="/benefits" className="cta-button">
              See Member Benefits
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;