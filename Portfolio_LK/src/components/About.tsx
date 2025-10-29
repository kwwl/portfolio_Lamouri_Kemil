import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              Étudiant passionné par la data et l'intelligence artificielle, je combine mon apprentissage
              académique avec des expériences professionnelles concrètes en <strong>Data Marketing</strong>.
            </p>
            <p>
              Actuellement en 2ème année de Bachelor Data & IA à Hetic, je développe mes compétences
              en analyse de données et en machine learning. Mon alternance chez CScolombes me permet
              d'appliquer ces connaissances sur des projets concrets de Data Marketing et d'optimisation
              de campagnes de communication.
            </p>

            <div className="experience-highlights">
              <div className="highlight-item">
                <h3>Parcours</h3>
                <ul>
                  <li>Bachelor Data & IA (2ème année) - Hetic</li>
                  <li>Alternant Data Analyst chez CScolombes</li>
                  <li>Data Marketing et analyse de campagnes</li>
                </ul>
              </div>

              <div className="highlight-item">
                <h3>Certifications</h3>
                <ul>
                  <li>Certification Dataiku</li>
                  <li>Formation Data & IA - Hetic</li>
                  <li>Analyse de données et Machine Learning</li>
                </ul>
              </div>
            </div>

            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projets académiques</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Années d'études</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Alternance en cours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
