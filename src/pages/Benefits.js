import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: '📖',
      title: 'The Games Magazine Guide',
      description: 'Get featured in our comprehensive guide to the games and related activities distributed across the region.',
      details: [
        'Full-page business features available',
        'Distributed to 50,000+ visitors',
        'Digital and print versions',
        'Translated into multiple languages'
      ]
    },
    {
      icon: '🗺️',
      title: 'Event Map',
      description: 'Your business and events highlighted on our official tourist-style map with key locations.',
      details: [
        'Interactive digital map on website',
        'Printed maps at hotels and visitor centers',
        'GPS integration for easy navigation',
        'Category-based filtering (food, entertainment, lodging)'
      ]
    },
    {
      icon: '📅',
      title: 'Games Calendar',
      description: 'Your events listed in the master games calendar seen by thousands of visitors.',
      details: [
        'Prominent placement for member events',
        'Social media promotion of calendar events',
        'Integration with Google Calendar and Apple Calendar',
        'Email notifications to subscriber list'
      ]
    },
    {
      icon: '🏛️',
      title: 'Coalition Updates',
      description: 'Access to exclusive community coalition meetings and insider updates from city officials.',
      details: [
        'Monthly roundtable meetings',
        'Direct updates from Santa Clara and Bay Area Host Committee',
        'Early access to planning information',
        'Networking with other business leaders'
      ]
    },
    {
      icon: '📢',
      title: 'Global Promotion',
      description: 'Marketing and social media reach across California and worldwide through our networks.',
      details: [
        'Featured in Chamber social media (50K+ followers)',
        'Cross-promotion with partner organizations',
        'Press release inclusion opportunities',
        'International visitor outreach programs'
      ]
    },
    {
      icon: '🏆',
      title: 'Meet the Legends',
      description: 'Connect with champions and icons of the region through exclusive networking opportunities.',
      details: [
        'Exclusive meet-and-greet events',
        'Photo opportunities for marketing',
        'Endorsement possibilities',
        'VIP access to special events'
      ]
    },
    {
      icon: '🏙️',
      title: 'Visit Silicon Valley',
      description: 'Help attract visitors to Silicon Valley instead of San Francisco - more local business!',
      details: [
        'Coordinated "Stay Local" campaign',
        'Partnership with hotels and accommodations',
        'Visitor itinerary development',
        'Transportation and shuttle coordination'
      ]
    },
    {
      icon: '⚽',
      title: 'Games & Celebrations Hub',
      description: 'Featured on our public webpage showing visitors where to stay, eat, and play during the Games.',
      details: [
        'Dedicated business directory',
        'Customer reviews and ratings system',
        'Special offers and promotions platform',
        'Mobile-optimized for on-the-go visitors'
      ]
    }
  ];

  return (
    <div className="fade-in">
      <section className="section">
        <h1 className="section-title">All Member Benefits</h1>
        <p className="section-subtitle">
          Join the Games Committee and unlock all 8 exclusive benefits designed to maximize your business opportunities during the 2026 games.
        </p>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card" style={{ padding: '2rem' }}>
              <span className="benefit-icon" style={{ fontSize: '3rem' }}>{benefit.icon}</span>
              <h3 className="benefit-title" style={{ fontSize: '1.5rem' }}>{benefit.title}</h3>
              <p className="benefit-description" style={{ marginBottom: '1.5rem' }}>{benefit.description}</p>
              
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '1rem', fontSize: '1rem' }}>What You Get:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {benefit.details.map((detail, detailIndex) => (
                  <li key={detailIndex} style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-gold)' }}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Get All These Benefits?</h2>
          <a href="#join" className="cta-button primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
            Join the Coalition Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Benefits;