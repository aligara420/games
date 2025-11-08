import React from 'react';

const Events = () => {
  const upcomingEvents = [
    {
      date: 'Nov 28, 2025',
      title: 'Monthly Coalition Roundtable',
      time: '6:00 PM - 7:30 PM',
      location: 'Silicon Valley Chamber Office',
      description: 'Updates from Santa Clara and Bay Area Host Committee, networking, and event planning coordination.',
      type: 'meeting'
    },
    {
      date: 'Dec 15, 2025',
      title: 'Holiday Watch Party Planning Workshop',
      time: '2:00 PM - 4:00 PM', 
      location: 'Virtual Event',
      description: 'Learn how to plan successful watch parties and community events. Get templates and checklists.',
      type: 'workshop'
    },
    {
      date: 'Jan 12, 2026',
      title: 'Super Bowl Business Prep Summit',
      time: '9:00 AM - 12:00 PM',
      location: 'Levi\'s Stadium - Conference Center',
      description: 'Final preparations for Super Bowl weekend. Logistics, permits, and last-minute opportunities.',
      type: 'summit'
    },
    {
      date: 'Feb 1, 2026',
      title: 'Super Bowl Week Kickoff Event',
      time: '5:00 PM - 8:00 PM',
      location: 'Downtown San Jose',
      description: 'Official launch of Super Bowl week activities. Meet the media, network with partners.',
      type: 'launch'
    }
  ];

  const communityEvents = [
    {
      title: 'Silicon Valley Restaurant Week',
      date: 'February 3-9, 2026',
      description: 'Special menus and promotions at participating restaurants during Super Bowl week.',
      organizer: 'SV Restaurants Coalition'
    },
    {
      title: 'Game Day Block Parties',
      date: 'February 9, 2026',
      description: 'Neighborhood watch parties and community celebrations across Silicon Valley.',
      organizer: 'Community Partners'  
    },
    {
      title: 'Tech Innovation Showcase',
      date: 'February 7-8, 2026',
      description: 'Highlighting Silicon Valley innovation for visiting media and dignitaries.',
      organizer: 'Tech Council'
    }
  ];

  const getEventTypeColor = (type) => {
    switch(type) {
      case 'meeting': return 'var(--primary-blue)';
      case 'workshop': return 'var(--secondary-gold)';  
      case 'summit': return 'var(--accent-red)';
      case 'launch': return '#28a745';
      default: return 'var(--dark-gray)';
    }
  };

  const getEventTypeIcon = (type) => {
    switch(type) {
      case 'meeting': return '🤝';
      case 'workshop': return '🛠️';
      case 'summit': return '🏢';
      case 'launch': return '🚀';
      default: return '📅';
    }
  };

  return (
    <div className="fade-in">
      <section className="section">
        <h1 className="section-title">Events & Calendar</h1>
        <p className="section-subtitle">
          Stay connected with upcoming coalition meetings, workshops, and community events leading up to the 2026 games.
        </p>

        {/* Upcoming Official Events */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem', 
            color: 'var(--primary-blue)',
            textAlign: 'left'
          }}>
            🗓️ Upcoming Coalition Events
          </h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {upcomingEvents.map((event, index) => (
              <div key={index} style={{
                background: 'white',
                border: `3px solid ${getEventTypeColor(event.type)}`,
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '3rem',
                    marginBottom: '0.5rem'
                  }}>
                    {getEventTypeIcon(event.type)}
                  </div>
                  <div style={{
                    background: getEventTypeColor(event.type),
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    {event.date}
                  </div>
                </div>
                
                <div>
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: getEventTypeColor(event.type)
                  }}>
                    {event.title}
                  </h3>
                  <p style={{ 
                    color: '#666',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {event.description}
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#888' }}>
                    <span>⏰ {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
                
                <div>
                  <button className="cta-button" style={{ 
                    background: getEventTypeColor(event.type),
                    whiteSpace: 'nowrap'
                  }}>
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Events */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem', 
            color: 'var(--secondary-gold)',
            textAlign: 'left'
          }}>
            🎉 Community Events & Activations
          </h2>
          
          <div className="benefits-grid">
            {communityEvents.map((event, index) => (
              <div key={index} className="benefit-card">
                <h3 className="benefit-title" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                  {event.title}
                </h3>
                <div style={{ 
                  background: 'var(--secondary-gold)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {event.date}
                </div>
                <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {event.description}
                </p>
                <p style={{ 
                  fontSize: '0.9rem',
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  Organized by: {event.organizer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Event Section */}
        <div style={{
          background: 'var(--light-gray)',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>
            Planning Your Own Event?
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            marginBottom: '2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Submit your watch party, food festival, or community celebration to be featured in our official Games Calendar and promoted to thousands of visitors.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#submit-event" className="cta-button primary">
              Submit Your Event
            </a>
            <a href="/templates" className="cta-button">
              Get Event Planning Templates
            </a>
          </div>
        </div>

        {/* Calendar Integration */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--dark-gray)' }}>
            Stay Updated
          </h3>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            Add our events calendar to your calendar app and never miss an opportunity.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="cta-button" style={{ background: '#4285f4' }}>
              📅 Add to Google Calendar
            </button>
            <button className="cta-button" style={{ background: '#007aff' }}>
              📱 Add to Apple Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;