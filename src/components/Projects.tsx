import { useState } from "react";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  pdfLink?: string;
  category: "web" | "mobile" | "fullstack";
}

function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Analyse Amazon Prime",
      description:
        "Analyse exploratoire complète du catalogue Amazon Prime avec nettoyage de données, identification des réalisateurs les plus prolifiques et analyse des tendances de sorties par année.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      pdfLink: "amazon_prime.pdf",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Dashboard Data Marketing",
      description:
        "Tableau de bord Power BI présentant 128.78M$ de revenus, 18K clients totaux et 12K clients actifs avec analyses géographiques et temporelles des ventes par région.",
      technologies: ["Power BI", "SQL", "DAX", "Python"],
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      pdfLink: "Dashboard.pdf",
      category: "web",
    },
    {
      id: 3,
      title: "Modèle de Prédiction ML",
      description:
        "Développement d'un modèle de machine learning pour prédire les tendances et comportements utilisateurs, avec prétraitement des données et évaluation des performances.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/kwwl/first_cnn",
      category: "fullstack",
    },
    {
      id: 4,
      title: "Analyse Exploratoire de Données",
      description:
        "Projet d'analyse exploratoire sur un dataset complexe avec nettoyage, visualisations avancées et extraction d'insights pertinents.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/kwwl/projet_achats_publics",
      category: "web",
    },
    {
      id: 5,
      title: "Automatisation du modèle additif",
      description:
        "Construction d'un pipeline ETL avec Dataiku pour l'extraction, transformation et chargement automatique de données marketing.",
      technologies: ["Dataiku", "Python", "SQL", "API REST"],
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/kwwl/Additif-",
      category: "fullstack",
    },
    {
      id: 6,
      title: "Segmentation Client",
      description:
        "Projet de clustering pour segmenter les clients selon leurs comportements avec algorithmes de machine learning non supervisé.",
      technologies: ["Python", "Scikit-learn", "K-means", "Pandas", "Tableau"],
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/kwwl",
      category: "web",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Tous
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    )}
                    {project.pdfLink && (
                      <a
                        href={project.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
