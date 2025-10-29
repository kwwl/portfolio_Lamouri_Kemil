import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Bonjour, je suis</p>
          <h1 className="hero-name">Kémil Lamouri</h1>
          <h2 className="hero-title">Data Analyst / Développeur IA</h2>
          <p className="hero-description">
            Étudiant passionné par la data et l'intelligence artificielle.
            J'analyse les données pour en tirer des insights et proposer des solutions innovantes.
          </p>
          <div className="hero-tags">
            <span className="tag">Python</span>
            <span className="tag">SQL</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Viz</span>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-secondary">Me contacter</a>
          </div>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  );
}

export default Hero;
