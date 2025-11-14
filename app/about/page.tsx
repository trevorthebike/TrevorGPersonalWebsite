'use client';

export default function About() {
  return (
    <main className="home-container">
      <section>
        <div className="profile-card">
          <h1 className="profile-title">About Me</h1>
            <a className="profile-section">
              Hi, Im Trevor Gardner — a developer, problem-solver, and cyclist based in the 
              Santa Cruz. I graduated from the University of California,
              Santa Cruz with a B.S. in Computer Science: Computer Game Design, where I focused on game 
              development, systems programming, and building interactive experiences.
              My technical background spans C/C++, C#, Python, JavaScript, SQL, and MIPS Assembly,
              with hands-on experience across game development, full-stack web projects, and low-level computer 
              science concepts. I enjoy working at the intersection of creativity and engineering — whether thats
              building multiplayer systems in Unity, crafting clean interfaces with React, or experimenting with 
              neural networks in TensorFlow.
            </a>
          <h1 className="profile-title">What I have Worked On</h1>
            <a className="profile-section">
              I love building projects that solve real problems or help people share experiences:
              <li>
                Magic Anvil:  Team-built Unity game where I developed core gameplay systems, internal tools, and 
                managed deployment and QA.
              </li>
              <li>
                Riposta: Student and teacher Q&A web platform using Deno, Fresh, and Supabase, where I implemented editing, 
                deleting, and search features in a Scrum-based workflow.
              </li>
              <li>
                SoCo Clicks: Full-stack photo contest platform. I led the development end-to-end and automated the 
                judging process, dramatically reducing admin work
              </li>
            </a>
          <h1 className="profile-title">Work and Experience</h1>
            <a className="profile-section">
              Outside of software, I have spent several years working as a sales associate at local
              bike shops, first at Bike Peddler in Santa Rosa and now at CycleSport in Santa Cruz.
            </a>
         <h1 className="profile-title">What I am Into</h1>
            <a className="profile-section">
              Im especially interested in:
              <li>AI applications</li>
              <li>Game engins and game systems</li>
              <li>Linux and low level development</li>
              <li>Memory architecture and compilers</li>
              <li>Cycling</li>
            </a>
         <h1 className="profile-title">Contact Info</h1>
            <a className="profile-section">
              Im always looking for new challenges, collaborative projects, or opportunities to learn. 
              If youd like to connect, feel free to reach out at trevorthebike@gmail.com
            </a>
        </div>
      </section>
    </main>
  );
}
