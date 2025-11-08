import React from 'react';

const Templates = () => {
  const templateCategories = [
    {
      category: 'Social Media Posts',
      icon: '📱',
      templates: [
        'Watch Party Announcement',
        'Business Spotlight During Games', 
        'Special Menu/Offers Promotion',
        'Community Event Invitation',
        'Countdown Timer Graphics'
      ]
    },
    {
      category: 'Print Materials',
      icon: '🖨️',
      templates: [
        'Event Flyers',
        'Business Window Clings',
        'Menu Inserts',
        'Table Tents',
        'Promotional Banners'
      ]
    },
    {
      category: 'Digital Graphics',
      icon: '🎨',
      templates: [
        'Website Headers',
        'Email Newsletter Headers',
        'Instagram Story Templates',
        'Facebook Cover Photos',
        'Logo Variations'
      ]
    },
    {
      category: 'Event Planning',
      icon: '📋',
      templates: [
        'Watch Party Planning Checklist',
        'Permit Application Guide',
        'Vendor Contact List',
        'Marketing Timeline',
        'Budget Planning Worksheet'
      ]
    }
  ];

  return (
    <div className="fade-in">
      <section className="section">
        <h1 className="section-title">Free Marketing Templates</h1>
        <p className="section-subtitle">
          Join the Games Committee and get instant access to professionally designed templates you can customize for your business.
        </p>

        {/* Demo Preview Section */}
        <div style={{ 
          background: 'var(--light-gray)', 
          padding: '2rem', 
          borderRadius: 'var(--radius-lg)', 
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Preview: Social Media Template</h2>
          <div style={{
            background: 'white',
            maxWidth: '400px',
            margin: '0 auto',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ 
              background: 'var(--hero-gradient)', 
              color: 'white', 
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🏆 SUPER BOWL WATCH PARTY</h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>February 9, 2026 • 3:00 PM</p>
            </div>
            <div style={{ textAlign: 'left', color: 'var(--dark-gray)' }}>
              <p style={{ marginBottom: '1rem' }}>Join us at <strong>[YOUR BUSINESS NAME]</strong> for the biggest game of the year!</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                🍕 Game day specials<br/>
                📺 Big screen viewing<br/>
                🎉 Prizes & giveaways
              </p>
            </div>
            <div style={{ 
              marginTop: '1rem', 
              padding: '0.5rem',
              background: 'var(--light-gray)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              color: '#666'
            }}>
              #SiliconValleyGameTime #SuperBowlLX
            </div>
          </div>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
            Customize with your business info, colors, and branding
          </p>
        </div>

        {/* Template Categories */}
        <div className="benefits-grid">
          {templateCategories.map((category, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-icon">{category.icon}</span>
              <h3 className="benefit-title">{category.category}</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                {category.templates.map((template, templateIndex) => (
                  <li key={templateIndex} style={{ 
                    marginBottom: '0.5rem', 
                    paddingLeft: '1.5rem', 
                    position: 'relative',
                    color: '#666'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-gold)' }}>→</span>
                    {template}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Access Section */}
        <div style={{ 
          background: 'var(--primary-blue)', 
          color: 'white', 
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Get Instant Access to All Templates</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
            Join the Games Committee today and download your complete template library immediately.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#join" className="cta-button" style={{ background: 'var(--secondary-gold)' }}>
              Join & Download Templates
            </a>
            <a href="/benefits" className="cta-button" style={{ background: 'transparent', border: '2px solid white' }}>
              See All Benefits
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '3rem' }}>
          <h2 className="section-title">Template FAQ</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                q: "What formats are the templates available in?",
                a: "All templates come in multiple formats: PNG, JPG, PDF, and editable PSD/AI files for maximum flexibility."
              },
              {
                q: "Can I customize the templates with my own branding?",
                a: "Absolutely! All templates are designed to be easily customized with your logo, colors, and business information."
              },
              {
                q: "How often are new templates added?",
                a: "We add new templates monthly, with special seasonal releases leading up to the games."
              },
              {
                q: "Is there a cost for the templates?",
                a: "No! All templates are completely free for Games Committee members."
              }
            ].map((faq, index) => (
              <div key={index} style={{ 
                marginBottom: '2rem', 
                padding: '1.5rem',
                background: 'var(--light-gray)',
                borderRadius: 'var(--radius-md)'
              }}>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>{faq.q}</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;