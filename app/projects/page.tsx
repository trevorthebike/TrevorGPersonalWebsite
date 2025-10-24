'use client';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>

      <section className="project-card">
        <div className="project-card-inner">
          <div className="project-card-text">
            <h3 className="project-title">Magic Anvil</h3>
            <p className="project-meta">Winter 23/Spring 24, UCSC</p>
            <p>
              Developed core game functionality in Unity & C#. Led deployment, tools, 
              & bug testing, resolving issues. Collaborated with a team of 6 developers 
              to refine gameplay.
            </p>
            <a href="#" className="project-link">View on GitHub</a>
          </div>
          <div className="project-card-image">
            <div className="image-wrapper">
              <Image 
                src="/magic-anvil.jpg" 
                alt="Magic Anvil Screenshot" 
                fill 
                className="rounded-md object-cover" 
              />
            </div>
            <div className="image-wrapper">
              <Image 
                src="/magic-anvil2.jpg" 
                alt="Magic Anvil Screenshot" 
                fill 
                className="rounded-md object-cover" 
              />
            </div>
          </div> 
        </div>
      </section>

      <section className="project-card">
        <h3 className="project-title">Risposta</h3>
        <p className="project-meta">Winter 23, UCSC</p>
        <p>
          Built student Q&A platform. Implemented editing, deleting, and search 
          features using Deno, Fresh, Supabase. Optimized queries, reducing response time.
        </p>
        <a href="#" className="project-link">View on GitHub</a>
        <div className="project-card-image">
            <Image 
              src="/magic-anvil.jpg" 
              alt="Magic Anvil Screenshot" 
              width={400} 
              height={250} 
              className="rounded-md"
            />
            <Image 
              src="/magic-anvil2.jpg" 
              alt="Magic Anvil Screenshot" 
              width={400} 
              height={250} 
              className="rounded-md"
            />
          </div>
      </section>

      <section className="project-card">
        <h3 className="project-title">SoCoClicks</h3>
        <p className="project-meta">Spring 22, Santa Rosa Junior College</p>
        <p>
          Developed website for photo contest submissions and judging. Implemented 
          login & multi-round judging, reducing admin workload.
        </p>
        <a href="#" className="project-link">View on GitHub</a>
      </section>
    </div>
  );
}
