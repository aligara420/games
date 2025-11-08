import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  // Super Bowl LX - February 9, 2026
  const superBowlDate = new Date('2026-02-09T18:30:00');
  
  // FIFA World Cup 2026 - June 11, 2026 (opening ceremony)
  const fifaDate = new Date('2026-06-11T12:00:00');

  const benefits = [
    {
      icon: '📖',
      title: 'The Games Magazine Guide',
      description: 'Get featured in our comprehensive guide to the games and related activities distributed across the region.'
    },
    {
      icon: '🗺️',
      title: 'Event Map',
      description: 'Your business and events highlighted on our official tourist-style map with key locations.'
    },
    {
      icon: '📅',
      title: 'Games Calendar',
      description: 'Your events listed in the master games calendar seen by thousands of visitors.'
    },
    {
      icon: '🏛️',
      title: 'Coalition Updates',
      description: 'Access to exclusive community coalition meetings and insider updates from city officials.'
    },
    {
      icon: '📢',
      title: 'Global Promotion',
      description: 'Marketing and social media reach across California and worldwide through our networks.'
    },
    {
      icon: '🏆',
      title: 'Meet the Legends',
      description: 'Connect with champions and icons of the region through exclusive networking opportunities.'
    },
    {
      icon: '🏙️',
      title: 'Visit Silicon Valley',
      description: 'Help attract visitors to Silicon Valley instead of San Francisco - more local business!'
    },
    {
      icon: '⚽',
      title: 'Games & Celebrations Hub',
      description: 'Featured on our public webpage showing visitors where to stay, eat, and play during the Games.'
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Silicon Valley Games Committee</h1>
          <p>Turn global moments into local wins. Join the coalition preparing Silicon Valley for Super Bowl LX and FIFA World Cup 2026.</p>
          
          {/* Countdown Timers */}
          <CountdownTimer 
            targetDate={superBowlDate} 
            eventName="Super Bowl LX" 
          />
          
          <CountdownTimer 
            targetDate={fifaDate} 
            eventName="FIFA World Cup 2026" 
          />
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/benefits" className="cta-button primary">See All Benefits</a>
            <a href="/templates" className="cta-button">Get Free Templates</a>
          </div>
        </div>
      </section>

      {/* Quick Benefits Preview */}
      <section className="section">
        <h2 className="section-title">Join and Get Instant Access To:</h2>
        <div className="benefits-grid">
          {benefits.slice(0, 4).map((benefit, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-icon">{benefit.icon}</span>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/benefits" className="cta-button">View All 8 Benefits</a>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">Get Started in 3 Simple Steps</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '2rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1️⃣</div>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Join the Coalition</h3>
            <p>Fill out our quick interest form and tell us how you want to participate.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2️⃣</div>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Get Your Templates</h3>
            <p>Download our free social media templates and promotional materials.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3️⃣</div>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Start Benefiting</h3>
            <p>Get featured in our guide, attend monthly roundtables, and watch the business roll in.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#join" className="cta-button primary">Join Now - It's Free</a>
        </div>
      </section>
    </div>
  );
};

export default Home;