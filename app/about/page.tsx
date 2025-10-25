'use client';
import Image from 'next/image';

export default function About() {
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
          <h1 className="profile-name">Trevor Gardner</h1>
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
        </div>
       </section>
      <section>
        <div className="profile-card">

          <img src="resume.png"></img>
        </div>
      </section>
    </main>
  );
}
