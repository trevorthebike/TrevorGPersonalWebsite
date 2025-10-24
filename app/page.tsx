'use client';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <main className="home-container">
      {/* Profile Section */}
      <section className="profile-card">
        {/* Profile Image */}
        <div className="profile-image-wrapper">
          <Image
            src="/profile.jpg"
            alt="Trevor Gardner"
            fill
            className="profile-image"
          />
        </div>

        {/* Bio Section */}
        <div className="profile-text">
          <h1 className="profile-name">Hi, I’m Trevor Gardner </h1>
          <h2 className="profile-role">Software Engineer | Game Developer | Tech Enthusiast</h2>
          <p className="profile-description">
            profile description
          </p>
          <p className="profile-description">
            profile description
          </p>
        </div>
      </section>

      {/* Interests Section */}
<section className="interests-section">
  <h3 className="interests-title">My Interests</h3>
  <div className="interest-grid">

    {/* Game Design */}
    <div className="interest-card">
      <div className="interest-image-wrapper">
        <Image src="/gamedesign.png" alt="Game Design" fill className="interest-image" />
      </div>
      <div className="interest-title">Game Design</div>
    </div>

    {/* Web Development */}
    <div className="interest-card">
      <div className="interest-image-wrapper">
        <Image src="/web-dev.jpg" alt="Web Development" fill className="interest-image" />
      </div>
      <div className="interest-title">Web Development</div>
    </div>

    {/* AI & Machine Learning */}
    <div className="interest-card">
      <div className="interest-image-wrapper">
        <Image src="/ai.jpg" alt="AI & Machine Learning" fill className="interest-image" />
      </div>
      <div className="interest-title">AI & Machine Learning</div>
    </div>

  </div>
</section>

    </main>
  );
}
