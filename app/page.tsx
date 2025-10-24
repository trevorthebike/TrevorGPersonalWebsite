'use client';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <main className="home-container">
      <section className="profile-card">
        <div className="profile-image-wrapper">
          <Image
            src="/trevor.jpg"
            alt="Trevor Gardner"
            fill
            className="profile-image"
          />
        </div>

        {/* Bio Section */}
        <div className="profile-text">
          <h1 className="profile-name">Hi, I’m Trevor Gardner</h1>
          <h2 className="profile-role">Software Engineer | Game Developer | Tech Enthusiast</h2>
          <ul>
          <li>
            <strong>University of California, Santa Cruz</strong><br />
            B.S. in Computer Science: Computer Game Design, Spring 2024
          </li>
          <br />
          </ul>
          <p className="profile-description">
            Based in Santa Cruz, CA. I’m a Computer Science graduate from UCSC specializing in Computer Game Design. 
            I enjoy building interactive software, experimenting with AI, and developing full-stack web applications.
          </p>
          <p className="profile-description">
            You can reach me at trevorthebike@gmail.com
            <br />
            <a href="https://www.linkedin.com/in/trevor-gardner-916866230/" target="_blank" rel="noopener" className="project-link">LinkedIn</a>
            <br/>  
            <a href="https://github.com/trevorthebike" target="_blank" rel="noopener" className="project-link">GitHub</a>
          </p>
        </div>
       </section>

      {/* Projects Section */}
      <section className="interests-section">
        <h3 className='interests-section-title'><a href="/projects">Projects</a></h3>
        <div className="interest-grid">
          <div className="interest-card">
            <div className="interest-image-wrapper">
              <Image src="/magic-anvil.jpg" alt="Web Development" fill className="interest-image" />
            </div>
            <div className="interest-title">
              <h4>Magic Anvil (Spring 24, UCSC)</h4>
              <p>Developed core game functionality in Unity (C#), led deployment, internal tools, and QA testing in an Agile team.</p>
            </div>
          </div>
          <div className="interest-card">
            <div className="interest-image-wrapper">
              <Image src="/risposta1.png" alt="Web Development" fill className="interest-image" />
            </div>
            <div className="interest-title">
              <h4>Riposta (Winter 23, UCSC)</h4>
              <p>Built a student Q&A platform using Deno, Fresh, Supabase; implemented editing, deleting, and search functionality; practiced Scrum methodology.</p>
            </div>
          </div>
          <div className="interest-card">
            <div className="interest-image-wrapper">
              <Image src="/soco1.png" alt="Web Development" fill className="interest-image" />
            </div>
            <div className="interest-title">  <h4>SoCo Clicks (Spring 22, SRJC)</h4>
            <p>Led development of a photo contest platform with login and multi-round judging; sole developer on a 3-person team; automated judging process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <h3 className='interests-section-title'><a href="/interests">My Interests</a></h3>
        <div className="interest-grid">

          <div className="interest-card">
            <div className="interest-image-wrapper">
              <Image src="/magic-anvil2.jpg" alt="Game Design" fill className="interest-image" />
            </div>
            <div className="interest-title">Game Design</div>
          </div>

          <div className="interest-card">
            <div className="interest-image-wrapper">
              <Image src="/riderpredictor1.png" alt="AI & Machine Learning" fill className="interest-image" />
            </div>
            <div className="interest-title">AI & Machine Learning</div>
          </div>

          <div className="interest-card">
            <div className="interest-image-wrapper">
              <Image src="/tux.jpeg" alt="Linux" fill className="interest-image" />
            </div>
            <div className="interest-title">Linux & Low-Level Systems</div>
          </div>

        </div>
      </section>

    </main>
  );
}
