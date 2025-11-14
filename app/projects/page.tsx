'use client';
import Image from 'next/image';

export default function Projects() {
  return (
    <main className="home-container">
      <div className="projects-container">
        <section className="project-card">
          <div className="project-card-inner">
            <div className="project-card-text">
              <h3 className="project-title">Rider Result Predictor</h3>
              <p className="project-meta">Spring 25, UCSC Silicon Valley Extension</p>
              <h1>Rider Performance Classification with LSTM</h1>
              <p>Classify rider performance from time-series stage data using an LSTM model.</p>
              <br></br>
              <h2 id="overview">Project Overview</h2>
              <p>
                This project processes stage time-series data for riders, performs feature engineering and scaling,
                and trains an LSTM model to classify rider performance. The original target (predicting exact race
                result) was reframed to a classification task due to complexity; validation accuracy has been
                observed around <strong>68-70%</strong>.
              </p>
              <br></br>
              <ul>
                <li>Process stage data into time-series sequences suitable for recurrent models.</li>
                <li>Apply feature engineering and scaling steps.</li>
                <li>Train an LSTM model with weighted loss to handle class imbalance.</li>
                <li>Validate model performance (accuracy, loss, probability outputs).</li>
                <li>Code is modular to support testing and reuse.</li>
              </ul>
                <a href="https://github.com/trevorthebike/RiderPredictor/tree/master" className="project-link">View on GitHub</a>
              </div>
            </div>
            <div className="project-card-image">
              <div className="image-wrapper">
                <Image className = "project-image"
                  src="/riderpredictor1.png" 
                  alt="Magic Anvil Screenshot" 
                  fill 
                />
              </div>
              <div className="image-wrapper">
                <Image className = "project-image"
                  src="/riderpredictor.png" 
                  alt="Magic Anvil Screenshot" 
                  fill 
                />
            </div> 
          </div>
        </section>
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
                <Image className = "project-image"
                  src="/magic-anvil.jpg" 
                  alt="Magic Anvil Screenshot" 
                  fill 
                />
              </div>
              <div className="image-wrapper">
                <Image className = "project-image"
                  src="/magic-anvil2.jpg" 
                  alt="Magic Anvil Screenshot" 
                  fill 
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
          <a href="https://risposta.org/" className="project-link">Risposta.org</a>
          <br></br>
          <a href="https://github.com/lino-levan/risposta.org" className="project-link">Github link</a>
          <div className="project-card-image">
              <div className="image-wrapper">
                <Image className = "project-image"
                  src="/risposta.png" 
                  alt="Magic Anvil Screenshot" 
                  fill 
                />
              </div>
              <div className="image-wrapper">
                <Image className = "project-image"
                  src="/risposta1.png" 
                  alt="Magic Anvil Screenshot" 
                  fill 
                />
              </div>
            </div> 
        </section>
        <section className="project-card">
          <h3 className="project-title">SoCoClicks</h3>
          <p className="project-meta">Spring 22, Santa Rosa Junior College</p>
          <p>
            Developed website for photo contest submissions and judging. Implemented 
            login & multi-round judging, reducing admin workload.
          </p>
          <h1>Tech Used</h1>
          <ul>
            <li>PHP</li>
            <li>CSS</li>
            <li>WordPress</li>
          </ul>
          <a href="#" className="project-link">View on GitHub</a>
          <div className="project-card-image">
              <div className="image-wrapper">
                <Image className = "project-image"
                  src="/soco.png" 
                  alt="Magic Anvil Screenshot" 
                  fill 
                />
              </div>
              <div className="image-wrapper">
                <Image className = "project-image"
                  src="/soco1.png" 
                  alt="Magic Anvil Screenshot" 
                  fill 
                />
              </div>
            </div> 
        </section>
      </div>
    </main>
  );
}
